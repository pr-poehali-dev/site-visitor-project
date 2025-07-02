import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Icon name="Music" size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">SoundWave</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Главная
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            О группе
          </a>
          <a
            href="#music"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Музыка
          </a>
          <a
            href="#concerts"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Концерты
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-700">
            <Icon name="Search" size={16} />
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
          >
            Слушать
          </Button>
        </div>
      </div>
    </header>
  );
}
