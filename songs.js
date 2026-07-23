const rawSongsData = [
  // Miyagi & Andy Panda / Эндшпиль
  { title: "Captain", artist: "Miyagi" },
  { title: "I Got Love", artist: "Miyagi & Эндшпиль" },
  { title: "Патрон (Bullet)", artist: "Miyagi & Andy Panda" },
  { title: "Fire Man", artist: "Miyagi & Эндшпиль" },
  { title: "Люби меня", artist: "Miyagi & Эндшпиль" },
  { title: "Minor", artist: "Miyagi & Andy Panda" },
  { title: "Brooklyn", artist: "Miyagi & Andy Panda" },
  { title: "Рапапам", artist: "9 ГРАММ & Miyagi" },
  { title: "Самая", artist: "Miyagi & Эндшпиль" },
  { title: "Yamakasi", artist: "Miyagi & Andy Panda" },
  { title: "Там ревели горы", artist: "Miyagi & Andy Panda" },
  { title: "Marmalade", artist: "Miyagi & Andy Panda" },
  { title: "Санавабич", artist: "Miyagi & Эндшпиль" },
  { title: "Marlboro", artist: "Miyagi" },
  { title: "Бонни", artist: "Miyagi" },
  { title: "Kosandra", artist: "Miyagi & Andy Panda" },
  { title: "Freeman", artist: "Miyagi & Andy Panda" },
  { title: "НЕ ЖАЛЬ", artist: "104 & Miyagi" },
  { title: "Заплаканная", artist: "Miyagi & Эндшпиль" },
  { title: "Untouchable", artist: "Miyagi & Эндшпиль" },
  { title: "По уши я в тебя влюблён", artist: "Miyagi" },
  { title: "Silhouette", artist: "Miyagi & Эндшпиль" },
  { title: "Billboard", artist: "Andy Panda, Скриптонит, Miyagi" },
  { title: "Половина моя", artist: "Miyagi & Эндшпиль" },
  { title: "Tantra", artist: "Miyagi & Andy Panda" },
  { title: "Самурай", artist: "Miyagi" },
  { title: "Голгофа", artist: "Miyagi & Эндшпиль" },
  { title: "Utopia", artist: "Miyagi & Andy Panda" },

  // Ганвест
  { title: "Вика любит ПЭПЭ", artist: "Ганвест" },
  { title: "Никотин", artist: "Ганвест" },
  { title: "ГОБА", artist: "Ганвест, INSTASAMKA, MONEYKEN" },
  { title: "НА РАХАТЕ", artist: "Ганвест" },
  { title: "Кайфули", artist: "Ганвест" },
  { title: "Хулиган", artist: "Ганвест" },
  { title: "Дурман", artist: "Ганвест" },
  { title: "Ананасовый сироп", artist: "Ганвест & Natan" },
  { title: "Порш", artist: "Ганвест" },
  { title: "FENDI2", artist: "Ганвест" },
  { title: "Калинка", artist: "Ганвест" },

  // DALEKONEANGEL
  { title: "Чёрное платье", artist: "DALEKONEANGEL" },
  { title: "Мне нужна твоя любовь", artist: "DALEKONEANGEL" },
  { title: "Люби меня", artist: "DALEKONEANGEL" },
  { title: "ДЫМ", artist: "DALEKONEANGEL" },
  { title: "Плюс", artist: "DALEKONEANGEL" },
  { title: "Сердце", artist: "DALEKONEANGEL" },
  { title: "Классная", artist: "DALEKONEANGEL" },
  { title: "Просто наблюдай", artist: "DALEKONEANGEL" },
  { title: "Дерзко", artist: "DALEKONEANGEL" },
  { title: "Ночь", artist: "DALEKONEANGEL" },
  { title: "BALENCI", artist: "DALEKONEANGEL" }
];

// Автоматически генерируем обложки и ссылки для проигрывания
const songs = rawSongsData.map((song, index) => ({
  id: index + 1,
  title: song.title,
  artist: song.artist,
  src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Демо-аудио
  cover: `https://picsum.photos/300/300?random=${index + 10}`,
  liked: false
}));