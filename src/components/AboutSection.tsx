import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  const members = [
    { name: "Алекс", role: "Вокал", instrument: "Mic" },
    { name: "Мария", role: "Гитара", instrument: "Guitar" },
    { name: "Денис", role: "Барабаны", instrument: "Music" },
    { name: "Елена", role: "Бас-гитара", instrument: "Music" },
    { name: "Игорь", role: "Клавиши", instrument: "Piano" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            О группе{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SoundWave
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда музыкантов, объединенных страстью к созданию
            уникального звука, который сочетает в себе современные электронные
            ритмы и живые инструменты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Наша история
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SoundWave была основана в 2020 году в Москве. Мы начинали как
              студийный проект, экспериментируя с различными жанрами — от
              электроники до рока.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              За годы работы мы выпустили 3 альбома, дали более 50 концертов и
              собрали преданную аудиторию поклонников по всей стране.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">2020</div>
                <div className="text-sm text-gray-500">Основание</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-500">Концертов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-500">Альбома</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
              <Icon name="Music" size={120} className="text-purple-300" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Состав группы
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {members.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={member.instrument as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
