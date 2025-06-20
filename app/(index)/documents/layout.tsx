import NavCICS from "@/components/nav-cics";
import NavDocuments from "@/components/nav-documents";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex w-full flex-col gap-4 *:rounded-2xl md:flex-row">
        <div className="sticky flex grow-1 basis-0 flex-col gap-4 text-black/60 *:rounded-2xl *:bg-neutral-300 *:px-6 *:py-8 *:shadow-xl">
          <div className="bg-neutral-300 px-6 py-8 rounded-2xl bg-[url(/images/noise.png)]">
            <h2 className="text-3xl font-bold">
              Documents <br /> Archive
            </h2>
          </div>
          <div className="flex flex-col gap-2 bg-[url(/images/noise.png)] text-lg *:font-bold bg-neutral-300 px-6 py-8 rounded-2xl">
            <NavDocuments />
          </div>
        </div>
        <div className="flex grow-3 basis-0 flex-col gap-4 bg-neutral-300 bg-[url(/images/noise.png)] p-6 text-black/80 rounded-2xl">
          {children}
        </div>
      </div>
    );
}
