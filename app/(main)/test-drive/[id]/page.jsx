import { getCarById } from "@/actions/car-listing";
import { notFound } from "next/navigation";
import { TestDriveForm } from "./_components/test-drive-form";

export async function generateMetadata() {
  return {
    title: `Book Test Drive | AutoMind`,
    description: `Schedule a test drive in few seconds`,
  };
}

export default async function TestDrivePage({ params }) {
  // Fetch car details
  const { id } = params;
  const result = await getCarById(id);

  // If car not found, show 404
  if (!result.success) {
    notFound();
  }

  // Provide default testDriveInfo if not available
  const testDriveInfo = result.data.testDriveInfo || {
    dealership: {
      name: "Vehiql Motors",
      address: "69 Car Street, Autoville, CA 69420",
      phone: "+1 (555) 123-4567",
      email: "contact@vehiql.com",
      workingHours: null,
    },
    existingBookings: [],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl mb-6 gradient-title">Book a Test Drive</h1>
      <TestDriveForm
        car={result.data}
        testDriveInfo={testDriveInfo}
      />
    </div>
  );
}
