import { RouterProvider } from "react-router";

import { router } from "./lib/router";

function App() {
  return (
    <div className="bg-[#F2F4F5]">
      <RouterProvider router={router} />
    </div>
  );
}

export { App };
