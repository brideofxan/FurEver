const fakeAnimals = [
  { id: 1, name: "Dawg", image: "https://placedog.net/400?id=1" },
  { id: 2, name: "Hunden", image: "https://placedog.net/400?id=2" },
  { id: 3, name: "Vovve", image: "https://placedog.net/400?id=3" },
];

export function getAllAnimals(req, res) {
  return res.status(200).json(fakeAnimals);
}
