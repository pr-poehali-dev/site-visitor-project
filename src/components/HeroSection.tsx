import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl animate-bounce">
            <Icon name="Music" size={48} className="text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SoundWave
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Музыкальная группа, создающая звуки будущего
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Слушать треки
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Концерты
          </Button>
        </div>

        <div className="flex items-center space-x-6 text-gray-300">
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={20} />
            <span>5 участников</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Music" size={20} />
            <span>15+ треков</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={20} />
            <span>Москва</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/70" />
      </div>
    </section>
  );
}
