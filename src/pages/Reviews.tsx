
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Reviews</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-center text-muted-foreground">
              Reviews content coming soon...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
