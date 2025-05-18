import { useState } from "react";
import { Activity, Check, Clock, CreditCard, Edit, Key, Lock, Mail, Save, User, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample user data
  const userData = {
    id: "user123",
    firstName: "Michael",
    lastName: "Thompson",
    email: "michael.thompson@example.com",
    profileImage: null,
    phone: "+1 (555) 123-4567",
    country: "United States",
    timezone: "UTC-5 (Eastern Time)",
    joinDate: "January 15, 2025",
    role: "trader",
    status: "active"
  };
  
  // Sample notification preferences
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailTradeUpdates: true,
    emailAccountStatus: true,
    emailPayouts: true,
    emailMarketing: false,
    pushTradeUpdates: true,
    pushAccountStatus: true,
    pushPayouts: true
  });
  
  // Sample security activity
  const securityActivity = [
    {
      id: 1,
      action: "Password Changed",
      date: "May 15, 2025",
      time: "09:23 AM",
      location: "New York, USA",
      device: "Chrome on Windows"
    },
    {
      id: 2,
      action: "Login",
      date: "May 14, 2025",
      time: "02:45 PM",
      location: "New York, USA",
      device: "Chrome on Windows"
    },
    {
      id: 3,
      action: "Login",
      date: "May 12, 2025",
      time: "10:12 AM",
      location: "New York, USA",
      device: "Safari on iPhone"
    }
  ];
  
  const handleNotificationChange = (key: keyof typeof notificationPreferences) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [key]: !notificationPreferences[key]
    });
  };
  
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button variant="ghost" size="sm">
              Support
            </Button>
            <Button variant="outline" size="sm">
              Log Out
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container py-6 flex flex-1">
        <div className="grid grid-cols-12 gap-6 w-full">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-2">
            <Card className="sticky top-20">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <User className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Activity className="h-4 w-4" />
                    <span>Trading Accounts</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Activity className="h-4 w-4" />
                    <span>Trade History</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Clock className="h-4 w-4" />
                    <span>Challenges</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <CreditCard className="h-4 w-4" />
                    <span>Payouts</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm bg-primary/10 text-primary">
                    <UserCircle className="h-4 w-4" />
                    <span>Profile</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">User Profile</h1>
            </div>
            
            <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="profile">Profile Information</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              
              {/* Profile Information Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleEdit}
                    >
                      {isEditing ? (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </>
                      ) : (
                        <>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Profile Image */}
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                          <UserCircle className="h-16 w-16 text-primary" />
                        </div>
                        {isEditing && (
                          <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                            <Edit className="h-3.5 w-3.5" />
                          </Button>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium">{userData.firstName} {userData.lastName}</h3>
                        <p className="text-sm text-muted-foreground">{userData.email}</p>
                        <div className="flex items-center text-xs">
                          <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                          <span>Active Trader</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Personal Details Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          defaultValue={userData.firstName}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue={userData.lastName}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue={userData.email}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          defaultValue={userData.phone}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          defaultValue={userData.country}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Input
                          id="timezone"
                          defaultValue={userData.timezone}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Your account details and status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Account ID</h3>
                        <p>{userData.id}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Member Since</h3>
                        <p>{userData.joinDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Account Status</h3>
                        <div className="flex items-center">
                          <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                          <span className="capitalize">{userData.status}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Account Type</h3>
                        <p className="capitalize">{userData.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Update your password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                    
                    <div className="pt-2 flex justify-end">
                      <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                        <Lock className="h-4 w-4 mr-2" />
                        Update Password
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Key className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Authenticator App</h3>
                          <p className="text-sm text-muted-foreground">Use an authenticator app to get authentication codes</p>
                        </div>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email Authentication</h3>
                          <p className="text-sm text-muted-foreground">Receive authentication codes via email</p>
                        </div>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Login Activity</CardTitle>
                    <CardDescription>Recent security events for your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {securityActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                              {activity.action === "Password Changed" ? (
                                <Lock className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <User className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">{activity.action}</h3>
                              <p className="text-sm text-muted-foreground">{activity.date} at {activity.time}</p>
                              <p className="text-xs text-muted-foreground mt-1">{activity.device} • {activity.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button variant="ghost" size="sm" className="ml-auto">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Notifications</CardTitle>
                    <CardDescription>Manage your email preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Trade Updates</h3>
                        <p className="text-sm text-muted-foreground">Receive notifications about your trades</p>
                      </div>
                      <Switch
                        checked={notificationPreferences.emailTradeUpdates}
                        onCheckedChange={() => handleNotificationChange('emailTradeUpdates')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Account Status</h3>
                        <p className="text-sm text-muted-foreground">Get notified about account status changes</p>
                      </div>
                      <Switch
                        checked={notificationPreferences.emailAccountStatus}
                        onCheckedChange={() => handleNotificationChange('emailAccountStatus')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Payout Updates</h3>
                        <p className="text-sm text-muted-foreground">Receive notifications about payouts</p>
                      </div>
                      <Switch
                        checked={notificationPreferences.emailPayouts}
                        onCheckedChange={() => handleNotificationChange('emailPayouts')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Marketing Communications</h3>
                        <p className="text-sm text-muted-foreground">Receive promotional emails and offers</p>
                      </div>
                      <Switch
                        checked={notificationPreferences.emailMarketing}
                        onCheckedChange={() => handleNotificationChange('emailMarketing')}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Push Notifications</CardTitle>
                    <CardDescription>Manage your push notification preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Trade Updates</h3>
                        <p className="text-sm text-muted-foreground">Get notified when your trades are executed</p>
                      </div>
                      <Switch
                        checked={notificationPreferences.pushTradeUpdates}
                        onCheckedChange={() => handleNotificationChange('pushTradeUpdates')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Account Status</h3>
                        <p className="text-sm text-muted-foreground">Get notified about challenge progress</p>
                      </div>
                      <Switch
                        checked={notificationPreferences.pushAccountStatus}
                        onCheckedChange={() => handleNotificationChange('pushAccountStatus')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Payout Updates</h3>
                        <p className="text-sm text-muted-foreground">Get notified about payout status changes</p>
                      </div>
                      <Switch
                        checked={notificationPreferences.pushPayouts}
                        onCheckedChange={() => handleNotificationChange('pushPayouts')}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <footer className="bg-muted/30 backdrop-blur-sm border-t border-border mt-auto py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TradeFunded. All rights reserved.
        </div>
      </footer>
    </div>
  );
}