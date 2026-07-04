self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || !data.action) return;

  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage(data);
    });
  });
});

self.addEventListener("fetch", (event) => {
  // Простой fallback, пропускаем запросы
});