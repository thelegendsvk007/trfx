import { useState, useEffect } from "react";
import { format, subDays, addDays, parseISO } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, FilterX, RefreshCw } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Mock economic event data - in a real app, this would come from an API
const mockEconomicEvents = [
  {
    id: "event-1",
    title: "Non-Farm Payrolls",
    country: "US",
    date: "2025-05-20T12:30:00.000Z",
    impact: "high",
    previous: "175K",
    forecast: "180K",
    actual: null
  },
  {
    id: "event-2",
    title: "Interest Rate Decision",
    country: "UK",
    date: "2025-05-19T11:00:00.000Z",
    impact: "high",
    previous: "5.25%",
    forecast: "5.25%",
    actual: "5.00%"
  },
  {
    id: "event-3",
    title: "Retail Sales m/m",
    country: "EU",
    date: "2025-05-19T09:00:00.000Z",
    impact: "medium",
    previous: "0.3%",
    forecast: "0.2%",
    actual: "0.4%"
  },
  {
    id: "event-4",
    title: "CPI y/y",
    country: "AU",
    date: "2025-05-18T01:30:00.000Z",
    impact: "high",
    previous: "3.5%",
    forecast: "3.3%",
    actual: "3.2%"
  },
  {
    id: "event-5",
    title: "Trade Balance",
    country: "JP",
    date: "2025-05-18T23:50:00.000Z",
    impact: "low",
    previous: "¥340B",
    forecast: "¥290B",
    actual: "¥320B"
  },
  {
    id: "event-6",
    title: "GDP q/q",
    country: "US",
    date: "2025-05-21T12:30:00.000Z",
    impact: "high",
    previous: "2.1%",
    forecast: "2.2%",
    actual: null
  },
  {
    id: "event-7",
    title: "Building Permits",
    country: "CA",
    date: "2025-05-21T12:30:00.000Z",
    impact: "medium",
    previous: "6.2M",
    forecast: "6.3M",
    actual: null
  },
  {
    id: "event-8",
    title: "Unemployment Rate",
    country: "AU",
    date: "2025-05-22T01:30:00.000Z",
    impact: "high",
    previous: "3.8%",
    forecast: "3.9%",
    actual: null
  },
  {
    id: "event-9",
    title: "Manufacturing PMI",
    country: "EU",
    date: "2025-05-22T08:00:00.000Z",
    impact: "medium",
    previous: "51.2",
    forecast: "51.5",
    actual: null
  },
  {
    id: "event-10",
    title: "Crude Oil Inventories",
    country: "US",
    date: "2025-05-22T14:30:00.000Z",
    impact: "medium",
    previous: "-3.2M",
    forecast: "-2.1M",
    actual: null
  }
];

interface EconomicEvent {
  id: string;
  title: string;
  country: string;
  date: string;
  impact: "low" | "medium" | "high";
  previous: string;
  forecast: string;
  actual: string | null;
}

interface EconomicCalendarProps {
  className?: string;
  defaultDays?: number; // Number of days to display
}

const EconomicCalendar = ({ className = "", defaultDays = 3 }: EconomicCalendarProps) => {
  const today = new Date();
  const [startDate, setStartDate] = useState<Date>(subDays(today, 1));
  const [endDate, setEndDate] = useState<Date>(addDays(today, defaultDays));
  const [visibleEvents, setVisibleEvents] = useState<EconomicEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countriesFilter, setCountriesFilter] = useState<string[]>(["US", "EU", "UK", "JP", "AU", "CA"]);
  const [impactFilter, setImpactFilter] = useState<string[]>(["low", "medium", "high"]);
  const [isFiltering, setIsFiltering] = useState(false);

  // Load events when component mounts or filters change
  useEffect(() => {
    loadEvents();
  }, [startDate, endDate, countriesFilter, impactFilter]);

  // Function to load events (mock data for now)
  const loadEvents = () => {
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      // Filter events based on date range and filters
      const filtered = mockEconomicEvents.filter(event => {
        const eventDate = parseISO(event.date);
        const isInDateRange = eventDate >= startDate && eventDate <= endDate;
        const matchesCountry = countriesFilter.includes(event.country);
        const matchesImpact = impactFilter.includes(event.impact);
        
        return isInDateRange && matchesCountry && matchesImpact;
      });
      
      // Sort by date (most recent first)
      const sorted = [...filtered].sort((a, b) => 
        parseISO(a.date).getTime() - parseISO(b.date).getTime()
      );
      
      setVisibleEvents(sorted);
      setIsLoading(false);
    }, 500);
  };

  // Handle country filter change
  const handleCountryFilterChange = (country: string, checked: boolean) => {
    if (checked) {
      setCountriesFilter(prev => [...prev, country]);
    } else {
      setCountriesFilter(prev => prev.filter(c => c !== country));
    }
  };

  // Handle impact filter change
  const handleImpactFilterChange = (impact: string, checked: boolean) => {
    if (checked) {
      setImpactFilter(prev => [...prev, impact]);
    } else {
      setImpactFilter(prev => prev.filter(i => i !== impact));
    }
  };

  // Reset filters
  const resetFilters = () => {
    setCountriesFilter(["US", "EU", "UK", "JP", "AU", "CA"]);
    setImpactFilter(["low", "medium", "high"]);
  };

  // Navigation functions
  const goToPreviousDays = () => {
    setStartDate(date => subDays(date, defaultDays));
    setEndDate(date => subDays(date, defaultDays));
  };

  const goToNextDays = () => {
    setStartDate(date => addDays(date, defaultDays));
    setEndDate(date => addDays(date, defaultDays));
  };

  // Get impact badge styling
  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge variant="default">Medium</Badge>;
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return null;
    }
  };

  // Get country flag
  const getCountryFlag = (country: string) => {
    switch (country) {
      case "US":
        return "🇺🇸";
      case "UK":
        return "🇬🇧";
      case "EU":
        return "🇪🇺";
      case "JP":
        return "🇯🇵";
      case "AU":
        return "🇦🇺";
      case "CA":
        return "🇨🇦";
      default:
        return "🌐";
    }
  };

  // Format event time
  const formatEventTime = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return format(date, "HH:mm");
    } catch (error) {
      return "--:--";
    }
  };

  // Format event date as a header
  const formatDateHeader = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return format(date, "EEEE, MMMM d, yyyy");
    } catch (error) {
      return "Unknown Date";
    }
  };

  // Group events by date
  const groupedEvents = visibleEvents.reduce<Record<string, EconomicEvent[]>>((groups, event) => {
    const date = format(parseISO(event.date), "yyyy-MM-dd");
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {});

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Economic Calendar</CardTitle>
        <div className="flex items-center space-x-2">
          {/* Date Range Selector */}
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 pl-2">
                  <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                  <span className="text-xs">
                    {format(startDate, 'MMM d')} - {format(endDate, 'MMM d')}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="range"
                  selected={{
                    from: startDate,
                    to: endDate
                  }}
                  onSelect={(range) => {
                    if (range?.from) setStartDate(range.from);
                    if (range?.to) setEndDate(range.to);
                  }}
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Filters */}
          <Popover open={isFiltering} onOpenChange={setIsFiltering}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                <FilterX className="h-3.5 w-3.5 mr-1" />
                <span className="text-xs">Filters</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px]" align="end">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-sm">Countries</h4>
                  <div className="space-y-2">
                    {["US", "EU", "UK", "JP", "AU", "CA"].map(country => (
                      <div key={country} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`country-${country}`} 
                          checked={countriesFilter.includes(country)}
                          onCheckedChange={(checked) => 
                            handleCountryFilterChange(country, checked as boolean)
                          }
                        />
                        <Label htmlFor={`country-${country}`} className="text-sm cursor-pointer">
                          {getCountryFlag(country)} {country}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-sm">Impact</h4>
                  <div className="space-y-2">
                    {["high", "medium", "low"].map(impact => (
                      <div key={impact} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`impact-${impact}`} 
                          checked={impactFilter.includes(impact)}
                          onCheckedChange={(checked) => 
                            handleImpactFilterChange(impact, checked as boolean)
                          }
                        />
                        <Label htmlFor={`impact-${impact}`} className="text-sm cursor-pointer flex items-center">
                          {getImpactBadge(impact)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" onClick={resetFilters} className="w-full">
                  Reset Filters
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Navigation */}
          <div className="flex">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-r-none"
              onClick={goToPreviousDays}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-l-none"
              onClick={goToNextDays}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Refresh */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={loadEvents}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="max-h-[500px] overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        ) : visibleEvents.length > 0 ? (
          <div className="space-y-6">
            {Object.entries(groupedEvents).map(([date, events]) => (
              <div key={date} className="space-y-3">
                <h3 className="text-sm font-medium sticky top-0 bg-background/80 backdrop-blur-sm py-1">
                  {formatDateHeader(date + "T00:00:00.000Z")}
                </h3>
                
                <div className="space-y-2">
                  {events.map(event => (
                    <div 
                      key={event.id} 
                      className={cn(
                        "flex items-center border rounded-md p-3 hover:bg-muted/30 transition-colors",
                        event.actual ? "border-muted" : "border-border"
                      )}
                    >
                      <div className="mr-4 text-center">
                        <div className="text-base font-medium">{getCountryFlag(event.country)}</div>
                        <div className="text-xs text-muted-foreground">{event.country}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{event.title}</div>
                          <div className="flex items-center space-x-2">
                            {getImpactBadge(event.impact)}
                            <div className="flex items-center text-muted-foreground text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {formatEventTime(event.date)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-1 grid grid-cols-3 gap-1 text-xs">
                          <div>
                            <span className="text-muted-foreground">Previous: </span>
                            <span>{event.previous}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Forecast: </span>
                            <span>{event.forecast}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Actual: </span>
                            <span className={cn(
                              event.actual ? "font-medium" : "text-muted-foreground",
                              event.actual && parseFloat(event.actual) > parseFloat(event.forecast) 
                                ? "text-green-500" 
                                : event.actual && parseFloat(event.actual) < parseFloat(event.forecast)
                                ? "text-red-500"
                                : ""
                            )}>
                              {event.actual || "Pending"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-muted-foreground">
            <p>No economic events found for the selected period and filters.</p>
            <Button variant="link" onClick={resetFilters} className="mt-2">Reset filters</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EconomicCalendar;