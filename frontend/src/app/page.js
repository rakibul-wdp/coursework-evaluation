import { SigninForm } from "@/components/forms/SigninForm";

async function getStrapiData(url) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");

  const { title, description } = strapiData.data.attributes;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <SigninForm />
    </main>
  );
}
