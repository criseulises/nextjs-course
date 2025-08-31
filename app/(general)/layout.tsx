export default function MainLayout({ children }: { children: React.ReactNode }) {
   return (
      <main className="flex flex-col items-center p-24">
         <h1>Hello Root Layout Main</h1>
         {children}
      </main>
   );
}
