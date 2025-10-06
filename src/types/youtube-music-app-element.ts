export interface YouTubeMusicAppElement extends HTMLElement {
  navigate(page: string): void;
  networkManager: {
    fetch: <ReturnType, Data>(url: string, data: Data) => Promise<ReturnType>;
  };
}
