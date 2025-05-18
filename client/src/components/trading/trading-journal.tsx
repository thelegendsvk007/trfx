import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { BookOpen, Plus, Edit, Trash2, ArrowUpRight, ArrowDownRight, Calendar, Check, X, Pencil, LineChart, FileText, Info } from "lucide-react";

// Trade interface
interface TradeEntry {
  id: string;
  date: string;
  symbol: string;
  action: "buy" | "sell";
  entryPrice: number;
  exitPrice: number;
  size: number;
  pnl: number;
  pnlPercent: number;
  stopLoss?: number;
  takeProfit?: number;
  tags: string[];
  notes: string;
  screenshot?: string;
  emotions?: "neutral" | "fearful" | "greedy" | "confident" | "hesitant";
  strategy: string;
}

// Mock strategies
const tradingStrategies = [
  "Trend Following",
  "Breakout",
  "Support/Resistance",
  "Momentum",
  "Mean Reversion",
  "Price Action",
  "Fibonacci Retracement",
  "Moving Average Crossover",
  "RSI Divergence",
  "Scalping"
];

// Mock data for the journal
const mockTrades: TradeEntry[] = [
  {
    id: "trade-1",
    date: "2025-05-17T14:32:00.000Z",
    symbol: "EUR/USD",
    action: "buy",
    entryPrice: 1.0925,
    exitPrice: 1.0960,
    size: 0.5,
    pnl: 175,
    pnlPercent: 0.32,
    stopLoss: 1.0900,
    takeProfit: 1.0975,
    tags: ["trend", "breakout"],
    notes: "Caught the breakout of the ascending triangle pattern. Strong momentum on the 15-minute chart.",
    emotions: "confident",
    strategy: "Breakout"
  },
  {
    id: "trade-2",
    date: "2025-05-16T10:15:00.000Z",
    symbol: "GBP/USD",
    action: "sell",
    entryPrice: 1.2648,
    exitPrice: 1.2618,
    size: 0.3,
    pnl: 90,
    pnlPercent: 0.24,
    stopLoss: 1.2675,
    takeProfit: 1.2600,
    tags: ["reversal", "resistance"],
    notes: "Price rejected at major resistance level with bearish engulfing pattern.",
    emotions: "neutral",
    strategy: "Support/Resistance"
  },
  {
    id: "trade-3",
    date: "2025-05-15T16:45:00.000Z",
    symbol: "USD/JPY",
    action: "buy",
    entryPrice: 156.35,
    exitPrice: 156.20,
    size: 0.4,
    pnl: -60,
    pnlPercent: -0.10,
    stopLoss: 156.15,
    takeProfit: 156.70,
    tags: ["pullback", "failed"],
    notes: "Tried to catch a pullback but market momentum shifted. Should have waited for confirmation.",
    emotions: "greedy",
    strategy: "Mean Reversion"
  },
  {
    id: "trade-4",
    date: "2025-05-14T09:20:00.000Z",
    symbol: "XAU/USD",
    action: "buy",
    entryPrice: 2355.40,
    exitPrice: 2372.80,
    size: 0.1,
    pnl: 174,
    pnlPercent: 0.74,
    stopLoss: 2345.00,
    takeProfit: 2375.00,
    tags: ["trend", "news"],
    notes: "Entered after positive economic data. Strong bullish momentum on gold.",
    emotions: "confident",
    strategy: "Momentum"
  },
  {
    id: "trade-5",
    date: "2025-05-13T13:10:00.000Z",
    symbol: "EUR/USD",
    action: "sell",
    entryPrice: 1.0940,
    exitPrice: 1.0970,
    size: 0.5,
    pnl: -150,
    pnlPercent: -0.27,
    stopLoss: 1.0975,
    takeProfit: 1.0900,
    tags: ["reversal", "failed"],
    notes: "Expected a reversal at resistance, but strong buying pressure continued. Cut loss early.",
    emotions: "hesitant",
    strategy: "Support/Resistance"
  }
];

// Emotion options mapping
const emotionOptions = [
  { value: "neutral", label: "😐 Neutral" },
  { value: "fearful", label: "😨 Fearful" },
  { value: "greedy", label: "🤑 Greedy" },
  { value: "confident", label: "😎 Confident" },
  { value: "hesitant", label: "🤔 Hesitant" }
];

// Generate performance stats from trades
const calculatePerformanceStats = (trades: TradeEntry[]) => {
  // Win/Loss stats
  const winningTrades = trades.filter(trade => trade.pnl > 0);
  const losingTrades = trades.filter(trade => trade.pnl < 0);
  
  const totalTrades = trades.length;
  const winCount = winningTrades.length;
  const lossCount = losingTrades.length;
  const winRate = totalTrades > 0 ? (winCount / totalTrades) * 100 : 0;
  
  // Profit/Loss stats
  const totalPnL = trades.reduce((sum, trade) => sum + trade.pnl, 0);
  const averagePnL = totalTrades > 0 ? totalPnL / totalTrades : 0;
  const averageWin = winCount > 0 
    ? winningTrades.reduce((sum, trade) => sum + trade.pnl, 0) / winCount 
    : 0;
  const averageLoss = lossCount > 0 
    ? losingTrades.reduce((sum, trade) => sum + trade.pnl, 0) / lossCount 
    : 0;
  
  // Risk/Reward stats
  const riskRewardRatio = Math.abs(averageLoss) > 0 
    ? Math.abs(averageWin / averageLoss) 
    : 0;
  
  // Trade by symbol stats
  const symbolStats = trades.reduce((acc: Record<string, { count: number, pnl: number }>, trade) => {
    if (!acc[trade.symbol]) {
      acc[trade.symbol] = { count: 0, pnl: 0 };
    }
    acc[trade.symbol].count += 1;
    acc[trade.symbol].pnl += trade.pnl;
    return acc;
  }, {});
  
  // Strategy stats
  const strategyStats = trades.reduce((acc: Record<string, { count: number, pnl: number }>, trade) => {
    if (!acc[trade.strategy]) {
      acc[trade.strategy] = { count: 0, pnl: 0 };
    }
    acc[trade.strategy].count += 1;
    acc[trade.strategy].pnl += trade.pnl;
    return acc;
  }, {});
  
  return {
    totalTrades,
    winCount,
    lossCount,
    winRate,
    totalPnL,
    averagePnL,
    averageWin,
    averageLoss,
    riskRewardRatio,
    symbolStats,
    strategyStats
  };
};

interface TradingJournalProps {
  className?: string;
}

const TradingJournal = ({ className = "" }: TradingJournalProps) => {
  const [trades, setTrades] = useState<TradeEntry[]>(mockTrades);
  const [selectedTrade, setSelectedTrade] = useState<TradeEntry | null>(null);
  const [isAddTradeOpen, setIsAddTradeOpen] = useState(false);
  const [isViewTradeOpen, setIsViewTradeOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [performanceStats, setPerformanceStats] = useState(calculatePerformanceStats(mockTrades));
  const { toast } = useToast();
  
  // Form state for new/edit trade
  const [formData, setFormData] = useState<Partial<TradeEntry>>({
    symbol: "",
    action: "buy",
    entryPrice: 0,
    exitPrice: 0,
    size: 0,
    stopLoss: 0,
    takeProfit: 0,
    tags: [],
    notes: "",
    emotions: "neutral",
    strategy: ""
  });
  
  // Tags input state
  const [tagInput, setTagInput] = useState("");
  
  // Update stats when trades change
  useEffect(() => {
    setPerformanceStats(calculatePerformanceStats(trades));
  }, [trades]);
  
  // Handle opening the add trade dialog
  const handleAddTradeClick = () => {
    setFormData({
      symbol: "",
      action: "buy",
      entryPrice: 0,
      exitPrice: 0,
      size: 0,
      stopLoss: 0,
      takeProfit: 0,
      tags: [],
      notes: "",
      emotions: "neutral",
      strategy: ""
    });
    setTagInput("");
    setIsEditing(false);
    setIsAddTradeOpen(true);
  };
  
  // Handle opening the view trade dialog
  const handleViewTrade = (trade: TradeEntry) => {
    setSelectedTrade(trade);
    setIsViewTradeOpen(true);
  };
  
  // Handle opening the edit trade dialog
  const handleEditTrade = (trade: TradeEntry) => {
    setFormData({ ...trade });
    setTagInput("");
    setIsEditing(true);
    setIsViewTradeOpen(false);
    setIsAddTradeOpen(true);
  };
  
  // Handle trade deletion confirmation
  const handleDeleteConfirm = (trade: TradeEntry) => {
    setSelectedTrade(trade);
    setIsDeleteConfirmOpen(true);
  };
  
  // Delete a trade
  const deleteTrade = () => {
    if (selectedTrade) {
      setTrades(trades.filter(trade => trade.id !== selectedTrade.id));
      setIsDeleteConfirmOpen(false);
      setIsViewTradeOpen(false);
      
      toast({
        title: "Trade deleted",
        description: `Trade for ${selectedTrade.symbol} has been removed from your journal.`,
        variant: "default",
      });
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numericFields = ["entryPrice", "exitPrice", "size", "stopLoss", "takeProfit"];
    
    if (numericFields.includes(name)) {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Add a tag
  const addTag = () => {
    if (tagInput.trim() && formData.tags && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };
  
  // Remove a tag
  const removeTag = (tagToRemove: string) => {
    if (formData.tags) {
      setFormData({
        ...formData,
        tags: formData.tags.filter(tag => tag !== tagToRemove)
      });
    }
  };
  
  // Handle tag input keydown (add tag on Enter)
  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };
  
  // Save new or edited trade
  const saveTrade = () => {
    // Calculate PnL
    const pnl = formData.action === "buy"
      ? (formData.exitPrice! - formData.entryPrice!) * formData.size! * 10000
      : (formData.entryPrice! - formData.exitPrice!) * formData.size! * 10000;
    
    const pnlPercent = (pnl / (formData.entryPrice! * formData.size! * 10000)) * 100;
    
    const newTrade: TradeEntry = {
      id: isEditing && formData.id ? formData.id : `trade-${Date.now()}`,
      date: isEditing && formData.date ? formData.date : new Date().toISOString(),
      symbol: formData.symbol || "",
      action: formData.action as "buy" | "sell",
      entryPrice: formData.entryPrice || 0,
      exitPrice: formData.exitPrice || 0,
      size: formData.size || 0,
      pnl: parseFloat(pnl.toFixed(2)),
      pnlPercent: parseFloat(pnlPercent.toFixed(2)),
      stopLoss: formData.stopLoss,
      takeProfit: formData.takeProfit,
      tags: formData.tags || [],
      notes: formData.notes || "",
      emotions: formData.emotions as "neutral" | "fearful" | "greedy" | "confident" | "hesitant",
      strategy: formData.strategy || ""
    };
    
    if (isEditing) {
      setTrades(trades.map(trade => trade.id === newTrade.id ? newTrade : trade));
      toast({
        title: "Trade updated",
        description: "Your trade has been successfully updated.",
      });
    } else {
      setTrades([newTrade, ...trades]);
      toast({
        title: "Trade added",
        description: "New trade has been added to your journal.",
      });
    }
    
    setIsAddTradeOpen(false);
  };
  
  // Chart data for win/loss ratio
  const winLossData = [
    { name: "Win", value: performanceStats.winCount },
    { name: "Loss", value: performanceStats.lossCount }
  ];
  
  // Chart data for PnL by symbol
  const pnlBySymbolData = Object.entries(performanceStats.symbolStats).map(([symbol, data]) => ({
    name: symbol,
    pnl: data.pnl
  }));
  
  // Chart data for trades by strategy
  const tradesByStrategyData = Object.entries(performanceStats.strategyStats).map(([strategy, data]) => ({
    name: strategy,
    trades: data.count,
    pnl: data.pnl
  }));
  
  // Colors for charts
  const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#f59e0b", "#8b5cf6"];
  
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            <CardTitle>Trading Journal</CardTitle>
          </div>
          <Button onClick={handleAddTradeClick} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Trade
          </Button>
        </div>
        <CardDescription>Record and analyze your trading performance</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="trades" className="w-full">
          <div className="border-b px-6">
            <TabsList className="border-b-0">
              <TabsTrigger value="trades" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">Trades</TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">Performance</TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">Insights</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Trades Tab */}
          <TabsContent value="trades" className="p-6 pt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead className="text-right">Entry</TableHead>
                    <TableHead className="text-right">Exit</TableHead>
                    <TableHead className="text-right">Size</TableHead>
                    <TableHead className="text-right">P&L</TableHead>
                    <TableHead>Strategy</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trades.length > 0 ? (
                    trades.map(trade => (
                      <TableRow key={trade.id} className="cursor-pointer hover:bg-muted/50" onClick={() => handleViewTrade(trade)}>
                        <TableCell>
                          {format(parseISO(trade.date), "MMM d, HH:mm")}
                        </TableCell>
                        <TableCell>{trade.symbol}</TableCell>
                        <TableCell>
                          <Badge variant={trade.action === "buy" ? "default" : "destructive"} className="capitalize">
                            {trade.action === "buy" ? (
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                            )}
                            {trade.action}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{trade.entryPrice.toFixed(5)}</TableCell>
                        <TableCell className="text-right">{trade.exitPrice.toFixed(5)}</TableCell>
                        <TableCell className="text-right">{trade.size}</TableCell>
                        <TableCell className={`text-right font-medium ${trade.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {trade.pnl >= 0 ? "+" : ""}{trade.pnl.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{trade.strategy}</Badge>
                        </TableCell>
                        <TableCell className="w-[100px]">
                          <div className="flex items-center justify-end space-x-1" onClick={e => e.stopPropagation()}>
                            <Button variant="ghost" size="icon" onClick={() => handleEditTrade(trade)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDeleteConfirm(trade)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                        No trades recorded yet. Click "Add Trade" to get started.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          {/* Performance Tab */}
          <TabsContent value="stats" className="p-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Key performance metrics */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Trades</span>
                      <span className="font-medium">{performanceStats.totalTrades}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Win Rate</span>
                      <span className="font-medium">{performanceStats.winRate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total P&L</span>
                      <span className={`font-medium ${performanceStats.totalPnL >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {performanceStats.totalPnL >= 0 ? "+" : ""}${performanceStats.totalPnL.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg. Win</span>
                      <span className="font-medium text-green-500">+${Math.abs(performanceStats.averageWin).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg. Loss</span>
                      <span className="font-medium text-red-500">-${Math.abs(performanceStats.averageLoss).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Risk-Reward Ratio</span>
                      <span className="font-medium">{performanceStats.riskRewardRatio.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Win/Loss Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Win/Loss Ratio</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center h-[200px]">
                  {performanceStats.totalTrades > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={winLossData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {winLossData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? "#4ade80" : "#f87171"} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} trades`, ""]} />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      No trade data available
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* P&L by Symbol */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">P&L by Symbol</CardTitle>
                </CardHeader>
                <CardContent className="h-[200px]">
                  {pnlBySymbolData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={pnlBySymbolData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value) => [`$${value}`, "P&L"]}
                          labelFormatter={(label) => `Symbol: ${label}`}
                        />
                        <Bar dataKey="pnl" fill="#60a5fa" />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      No symbol data available
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Trade Performance by Strategy */}
              <Card className="md:col-span-3">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Strategy Performance</CardTitle>
                </CardHeader>
                <CardContent className="h-[250px]">
                  {tradesByStrategyData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={tradesByStrategyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="trades" name="# of Trades" fill="#8884d8" />
                        <Bar yAxisId="right" dataKey="pnl" name="P&L ($)" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      No strategy data available
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Insights Tab */}
          <TabsContent value="insights" className="p-6 pt-4">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <LineChart className="h-5 w-5 mr-2" />
                    Trading Performance Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {performanceStats.totalTrades > 0 ? (
                    <>
                      <div className="space-y-2">
                        <h3 className="text-md font-medium">Strengths</h3>
                        <div className="bg-green-500/10 p-4 rounded-md">
                          <ul className="space-y-2">
                            {performanceStats.winRate > 50 && (
                              <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                <span>
                                  Your win rate of {performanceStats.winRate.toFixed(1)}% is above average, 
                                  indicating a solid trading strategy.
                                </span>
                              </li>
                            )}
                            {performanceStats.riskRewardRatio > 1 && (
                              <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                <span>
                                  Your risk-reward ratio of {performanceStats.riskRewardRatio.toFixed(2)} is favorable,
                                  showing you're winning more than you're losing on average.
                                </span>
                              </li>
                            )}
                            {Object.entries(performanceStats.symbolStats).map(([symbol, data]) => (
                              data.pnl > 0 && data.count >= 2 && (
                                <li key={symbol} className="flex items-start">
                                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                  <span>
                                    Strong performance on {symbol} with {data.count} trades and ${data.pnl.toFixed(2)} profit.
                                  </span>
                                </li>
                              )
                            ))}
                            {Object.entries(performanceStats.strategyStats).map(([strategy, data]) => (
                              data.pnl > 0 && data.count >= 2 && (
                                <li key={strategy} className="flex items-start">
                                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                  <span>
                                    Your {strategy} strategy is profitable with ${data.pnl.toFixed(2)} from {data.count} trades.
                                  </span>
                                </li>
                              )
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-md font-medium">Areas for Improvement</h3>
                        <div className="bg-red-500/10 p-4 rounded-md">
                          <ul className="space-y-2">
                            {performanceStats.winRate < 50 && (
                              <li className="flex items-start">
                                <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                                <span>
                                  Your win rate of {performanceStats.winRate.toFixed(1)}% is below 50%. 
                                  Consider refining your entry criteria.
                                </span>
                              </li>
                            )}
                            {performanceStats.riskRewardRatio < 1 && (
                              <li className="flex items-start">
                                <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                                <span>
                                  Your risk-reward ratio of {performanceStats.riskRewardRatio.toFixed(2)} indicates your 
                                  losses are larger than your wins. Consider tightening stop losses or extending profit targets.
                                </span>
                              </li>
                            )}
                            {Object.entries(performanceStats.symbolStats).map(([symbol, data]) => (
                              data.pnl < 0 && data.count >= 2 && (
                                <li key={symbol} className="flex items-start">
                                  <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                                  <span>
                                    Consider reviewing your approach to {symbol}, which has resulted in ${Math.abs(data.pnl).toFixed(2)} 
                                    in losses across {data.count} trades.
                                  </span>
                                </li>
                              )
                            ))}
                            {Object.entries(performanceStats.strategyStats).map(([strategy, data]) => (
                              data.pnl < 0 && data.count >= 2 && (
                                <li key={strategy} className="flex items-start">
                                  <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                                  <span>
                                    Your {strategy} strategy is currently unprofitable, with ${Math.abs(data.pnl).toFixed(2)} 
                                    in losses from {data.count} trades.
                                  </span>
                                </li>
                              )
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-md font-medium">Recommendations</h3>
                        <div className="bg-blue-500/10 p-4 rounded-md">
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                              <span>
                                {performanceStats.totalTrades < 20 
                                  ? "Continue building your trade history for more meaningful insights." 
                                  : "You have a good sample size of trades to analyze patterns."}
                              </span>
                            </li>
                            {performanceStats.winRate < 50 && (
                              <li className="flex items-start">
                                <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                                <span>
                                  Review your trade entries and consider using demo trading to test new strategies
                                  before risking real capital.
                                </span>
                              </li>
                            )}
                            {Object.entries(performanceStats.strategyStats)
                              .sort((a, b) => b[1].pnl - a[1].pnl)[0] && (
                              <li className="flex items-start">
                                <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                                <span>
                                  Your most profitable strategy is {Object.entries(performanceStats.strategyStats)
                                    .sort((a, b) => b[1].pnl - a[1].pnl)[0][0]}. 
                                  Consider allocating more capital to this approach.
                                </span>
                              </li>
                            )}
                            {trades.some(trade => trade.emotions === "fearful" || trade.emotions === "greedy") && (
                              <li className="flex items-start">
                                <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                                <span>
                                  Emotional trading (fear/greed) appears in your journal. Consider implementing a more
                                  mechanical trading plan to reduce emotional bias.
                                </span>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-10 text-muted-foreground">
                      <FileText className="h-10 w-10 mx-auto mb-4 opacity-50" />
                      <p>No trades recorded yet to generate insights.</p>
                      <p className="mt-2">Add some trades to your journal to see performance analysis.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      {/* Add/Edit Trade Dialog */}
      <Dialog open={isAddTradeOpen} onOpenChange={setIsAddTradeOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Trade" : "Add New Trade"}</DialogTitle>
            <DialogDescription>
              {isEditing 
                ? "Update the details of your existing trade." 
                : "Record a new trade in your trading journal."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Symbol */}
            <div className="space-y-2">
              <Label htmlFor="symbol">Symbol</Label>
              <Input 
                id="symbol"
                name="symbol"
                value={formData.symbol}
                onChange={handleInputChange}
                placeholder="e.g., EUR/USD"
              />
            </div>
            
            {/* Trade Direction */}
            <div className="space-y-2">
              <Label>Direction</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio"
                    id="buy"
                    name="action"
                    value="buy"
                    className="form-radio"
                    checked={formData.action === "buy"}
                    onChange={handleInputChange}
                  />
                  <Label htmlFor="buy" className="cursor-pointer text-green-500">Buy/Long</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio"
                    id="sell"
                    name="action"
                    value="sell"
                    className="form-radio"
                    checked={formData.action === "sell"}
                    onChange={handleInputChange}
                  />
                  <Label htmlFor="sell" className="cursor-pointer text-red-500">Sell/Short</Label>
                </div>
              </div>
            </div>
            
            {/* Entry Price */}
            <div className="space-y-2">
              <Label htmlFor="entryPrice">Entry Price</Label>
              <Input 
                id="entryPrice"
                name="entryPrice"
                type="number"
                step="0.00001"
                value={formData.entryPrice}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Exit Price */}
            <div className="space-y-2">
              <Label htmlFor="exitPrice">Exit Price</Label>
              <Input 
                id="exitPrice"
                name="exitPrice"
                type="number"
                step="0.00001"
                value={formData.exitPrice}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Stop Loss */}
            <div className="space-y-2">
              <Label htmlFor="stopLoss">Stop Loss (optional)</Label>
              <Input 
                id="stopLoss"
                name="stopLoss"
                type="number"
                step="0.00001"
                value={formData.stopLoss === undefined ? "" : formData.stopLoss}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Take Profit */}
            <div className="space-y-2">
              <Label htmlFor="takeProfit">Take Profit (optional)</Label>
              <Input 
                id="takeProfit"
                name="takeProfit"
                type="number"
                step="0.00001"
                value={formData.takeProfit === undefined ? "" : formData.takeProfit}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Position Size */}
            <div className="space-y-2">
              <Label htmlFor="size">Position Size (Lots)</Label>
              <Input 
                id="size"
                name="size"
                type="number"
                step="0.01"
                value={formData.size}
                onChange={handleInputChange}
              />
            </div>
            
            {/* Strategy */}
            <div className="space-y-2">
              <Label htmlFor="strategy">Strategy</Label>
              <Select
                value={formData.strategy}
                onValueChange={(value) => handleSelectChange("strategy", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a strategy" />
                </SelectTrigger>
                <SelectContent>
                  {tradingStrategies.map(strategy => (
                    <SelectItem key={strategy} value={strategy}>
                      {strategy}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Emotions */}
            <div className="space-y-2">
              <Label htmlFor="emotions">Emotional State</Label>
              <Select
                value={formData.emotions}
                onValueChange={(value) => handleSelectChange("emotions", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="How did you feel?" />
                </SelectTrigger>
                <SelectContent>
                  {emotionOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Tags */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="tags">Tags</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.tags?.map(tag => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-3 py-1.5">
                    {tag}
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 rounded-full" 
                      onClick={() => removeTag(tag)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  id="tagInput"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  placeholder="Add tags (e.g., trend, breakout, news)"
                />
                <Button type="button" variant="secondary" onClick={addTag}>
                  Add
                </Button>
              </div>
            </div>
            
            {/* Notes */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea 
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="What was your reasoning? Any lessons learned?"
                rows={4}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddTradeOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveTrade}>
              {isEditing ? "Update Trade" : "Save Trade"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* View Trade Dialog */}
      <Dialog open={isViewTradeOpen} onOpenChange={setIsViewTradeOpen}>
        <DialogContent className="max-w-3xl">
          {selectedTrade && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <div>{selectedTrade.symbol} Trade Details</div>
                  <Badge 
                    variant={selectedTrade.pnl >= 0 ? "default" : "destructive"}
                    className="ml-2"
                  >
                    {selectedTrade.pnl >= 0 ? "Profit" : "Loss"}
                  </Badge>
                </DialogTitle>
                <DialogDescription>
                  {format(parseISO(selectedTrade.date), "MMMM d, yyyy 'at' HH:mm")}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Trade Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted/40 p-3 rounded-md">
                    <div className="text-xs text-muted-foreground">Direction</div>
                    <div className={`font-medium ${selectedTrade.action === "buy" ? "text-green-500" : "text-red-500"}`}>
                      {selectedTrade.action === "buy" ? (
                        <div className="flex items-center">
                          <ArrowUpRight className="mr-1 h-4 w-4" />
                          Buy/Long
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <ArrowDownRight className="mr-1 h-4 w-4" />
                          Sell/Short
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-muted/40 p-3 rounded-md">
                    <div className="text-xs text-muted-foreground">Position Size</div>
                    <div className="font-medium">{selectedTrade.size} Lots</div>
                  </div>
                  
                  <div className="bg-muted/40 p-3 rounded-md">
                    <div className="text-xs text-muted-foreground">P&L</div>
                    <div className={`font-medium ${selectedTrade.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {selectedTrade.pnl >= 0 ? "+" : ""}{selectedTrade.pnl.toFixed(2)} ({selectedTrade.pnlPercent.toFixed(2)}%)
                    </div>
                  </div>
                  
                  <div className="bg-muted/40 p-3 rounded-md">
                    <div className="text-xs text-muted-foreground">Strategy</div>
                    <div className="font-medium">{selectedTrade.strategy}</div>
                  </div>
                </div>
                
                {/* Entry/Exit Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h3 className="text-sm font-medium mb-3">Entry Details</h3>
                    <div className="grid grid-cols-2 gap-y-2">
                      <div className="text-sm text-muted-foreground">Price:</div>
                      <div className="text-sm">{selectedTrade.entryPrice.toFixed(5)}</div>
                      
                      {selectedTrade.stopLoss && (
                        <>
                          <div className="text-sm text-muted-foreground">Stop Loss:</div>
                          <div className="text-sm">{selectedTrade.stopLoss.toFixed(5)}</div>
                        </>
                      )}
                      
                      {selectedTrade.takeProfit && (
                        <>
                          <div className="text-sm text-muted-foreground">Take Profit:</div>
                          <div className="text-sm">{selectedTrade.takeProfit.toFixed(5)}</div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-sm font-medium mb-3">Exit Details</h3>
                    <div className="grid grid-cols-2 gap-y-2">
                      <div className="text-sm text-muted-foreground">Price:</div>
                      <div className="text-sm">{selectedTrade.exitPrice.toFixed(5)}</div>
                      
                      <div className="text-sm text-muted-foreground">Result:</div>
                      <div className={`text-sm ${selectedTrade.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {selectedTrade.pnl >= 0 ? "Profit" : "Loss"}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Emotional State */}
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium mb-2">Emotional State</h3>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      {selectedTrade.emotions === "neutral" && <span className="text-lg">😐</span>}
                      {selectedTrade.emotions === "fearful" && <span className="text-lg">😨</span>}
                      {selectedTrade.emotions === "greedy" && <span className="text-lg">🤑</span>}
                      {selectedTrade.emotions === "confident" && <span className="text-lg">😎</span>}
                      {selectedTrade.emotions === "hesitant" && <span className="text-lg">🤔</span>}
                    </Avatar>
                    <span className="capitalize">{selectedTrade.emotions}</span>
                  </div>
                </div>
                
                {/* Tags */}
                {selectedTrade.tags && selectedTrade.tags.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrade.tags.map(tag => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Notes */}
                {selectedTrade.notes && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Notes</h3>
                    <div className="bg-muted/30 p-4 rounded-md text-sm">
                      {selectedTrade.notes}
                    </div>
                  </div>
                )}
              </div>
              
              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={() => setIsViewTradeOpen(false)}>
                  Close
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center"
                  onClick={() => {
                    setIsViewTradeOpen(false);
                    handleEditTrade(selectedTrade);
                  }}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Trade
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => {
                    setIsViewTradeOpen(false);
                    handleDeleteConfirm(selectedTrade);
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Trade
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this trade? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          {selectedTrade && (
            <div className="bg-muted/30 p-4 rounded-md mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{selectedTrade.symbol}</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {format(parseISO(selectedTrade.date), "MMM d, HH:mm")}
                  </span>
                </div>
                <Badge variant={selectedTrade.action === "buy" ? "default" : "destructive"} className="capitalize">
                  {selectedTrade.action}
                </Badge>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-sm">
                  {selectedTrade.entryPrice.toFixed(5)} → {selectedTrade.exitPrice.toFixed(5)}
                </div>
                <div className={`font-medium ${selectedTrade.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {selectedTrade.pnl >= 0 ? "+" : ""}{selectedTrade.pnl.toFixed(2)}
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={deleteTrade}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default TradingJournal;