import { create } from "zustand";

const useGlobalNav = create((set) => ({
  navigate: null,
  initNavigate: (nav) =>
    set(() => ({
      navigate: nav,
    })),
}));

export default useGlobalNav;
