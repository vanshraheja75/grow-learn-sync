
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Check if there's a query parameter specifying the mode
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    if (mode === "signup") {
      setIsLogin(false);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container mx-auto max-w-md px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? "Sign In" : "Sign Up"}
            </h1>
            
            <form className="space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              
              <Button className="w-full bg-skillsync-primary hover:bg-skillsync-teal">
                {isLogin ? "Sign In" : "Sign Up"}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-skillsync-primary hover:text-skillsync-teal text-sm"
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Sign In"}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
