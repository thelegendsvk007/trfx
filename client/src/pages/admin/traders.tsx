import { useState } from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { formatDate, getInitials, getStatusColor } from "@/lib/utils";
import { Loader2, Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";

export default function AdminTradersPage() {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Fetch traders data
  const { data, isLoading } = useQuery({
    queryKey: ['/api/admin/users', { page, limit, search: searchQuery, status: statusFilter }],
    // Mock response when API isn't fully implemented
    enabled: false
  });
  
  // Mock data for users
  const mockUsers = [
    {
      id: 1,
      username: "john_trader",
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@example.com",
      role: "trader",
      status: "active",
      createdAt: "2023-04-15T10:30:00Z",
      accountsCount: 2,
      totalBalance: 75000,
      profileImage: "https://images.unsplash.com/photo-1557862921-37829c790f19"
    },
    {
      id: 2,
      username: "sarah_j",
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@example.com",
      role: "trader",
      status: "active",
      createdAt: "2023-05-20T14:45:00Z",
      accountsCount: 1,
      totalBalance: 100000,
      profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    },
    {
      id: 3,
      username: "m_chen",
      firstName: "Michael",
      lastName: "Chen",
      email: "m.chen@example.com",
      role: "trader",
      status: "active",
      createdAt: "2023-03-10T09:15:00Z",
      accountsCount: 3,
      totalBalance: 325000,
      profileImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
      id: 4,
      username: "trader_alex",
      firstName: "Alex",
      lastName: "Williams",
      email: "alex.w@example.com",
      role: "trader",
      status: "inactive",
      createdAt: "2023-06-05T11:20:00Z",
      accountsCount: 0,
      totalBalance: 0,
      profileImage: null
    },
    {
      id: 5,
      username: "emma_forex",
      firstName: "Emma",
      lastName: "Davis",
      email: "emma.d@example.com",
      role: "trader",
      status: "suspended",
      createdAt: "2023-02-22T16:30:00Z",
      accountsCount: 1,
      totalBalance: 50000,
      profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
    },
    {
      id: 6,
      username: "robert_g",
      firstName: "Robert",
      lastName: "Garcia",
      email: "robert.g@example.com",
      role: "trader",
      status: "active",
      createdAt: "2023-04-02T13:10:00Z",
      accountsCount: 2,
      totalBalance: 150000,
      profileImage: null
    },
    {
      id: 7,
      username: "lisa_trader",
      firstName: "Lisa",
      lastName: "Brown",
      email: "lisa.b@example.com",
      role: "trader",
      status: "active",
      createdAt: "2023-03-15T15:40:00Z",
      accountsCount: 1,
      totalBalance: 25000,
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      id: 8,
      username: "david_markets",
      firstName: "David",
      lastName: "Wilson",
      email: "david.w@example.com",
      role: "trader",
      status: "active",
      createdAt: "2023-05-10T08:20:00Z",
      accountsCount: 1,
      totalBalance: 200000,
      profileImage: null
    },
    {
      id: 9,
      username: "olivia_fx",
      firstName: "Olivia",
      lastName: "Martinez",
      email: "olivia.m@example.com",
      role: "trader",
      status: "inactive",
      createdAt: "2023-01-30T10:15:00Z",
      accountsCount: 0,
      totalBalance: 0,
      profileImage: "https://images.unsplash.com/photo-1506863530036-1efeddceb993"
    },
    {
      id: 10,
      username: "james_trader",
      firstName: "James",
      lastName: "Thompson",
      email: "james.t@example.com",
      role: "trader",
      status: "active",
      createdAt: "2023-04-25T14:30:00Z",
      accountsCount: 2,
      totalBalance: 150000,
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];
  
  // Filter mock data based on search and status
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = searchQuery === "" || 
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // Pagination logic for mock data
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / limit);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1); // Reset to first page when searching
  };
  
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  
  return (
    <AdminLayout user={user || undefined}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Traders Management</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            View and manage all registered traders on the platform
          </p>
        </div>
      </div>
      
      {/* Search and Filter */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10"
                  placeholder="Search by name, username or email"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
            
            <div className="flex gap-2">
              <Select 
                value={statusFilter} 
                onValueChange={(value) => {
                  setStatusFilter(value);
                  setPage(1); // Reset to first page when filtering
                }}
              >
                <SelectTrigger className="w-[160px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                  setPage(1);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Traders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Registered Traders</CardTitle>
          <CardDescription>
            View, edit, and manage all traders registered on the platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trader</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Trading Accounts</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(data?.users || paginatedUsers).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-9 w-9 mr-3">
                          <AvatarImage src={user.profileImage || undefined} alt={user.username} />
                          <AvatarFallback>{getInitials(user.firstName, user.lastName)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.firstName} {user.lastName}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(user.createdAt)}</TableCell>
                    <TableCell>
                      {user.accountsCount > 0 ? (
                        <span>{user.accountsCount} {user.accountsCount === 1 ? 'account' : 'accounts'}</span>
                      ) : (
                        <span className="text-gray-400">No accounts</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                
                {(data?.users || paginatedUsers).length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500 dark:text-gray-400">
                      No traders found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-medium">{(page - 1) * limit + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(page * limit, data?.pagination?.total || filteredUsers.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium">{data?.pagination?.total || filteredUsers.length}</span>{" "}
            traders
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={page >= (data?.pagination?.pages || totalPages)}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </AdminLayout>
  );
}
