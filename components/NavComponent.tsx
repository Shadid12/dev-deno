import NavMenu from '../islands/NavMenu.tsx';

export default function Navbar() {
  return (
    <nav class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="ml-6 flex space-x-8">
              <a 
                href="/"
                class="inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Deno Dev Blog
              </a>
            </div>
          </div>
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}