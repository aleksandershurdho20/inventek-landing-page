import { Car, Heart, Leaf, Settings, Shield, Zap, AppWindow, Brain, TabletSmartphone } from 'lucide-react';

export const services = [
    {
      title: "Menaxhimi i Automatizuar i Inventarit",
      description: "Aplikacion për shitje me pakicë që përdor etiketa IoT për të gjurmuar nivelet e inventarit në kohë reale.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Zgjidhje për Bujqësi të Mençur",
      description: "Aplikacion që integron sensorë IoT në bujqësi për të monitoruar lagështinë e tokës dhe shëndetin e kulturave.",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Mirëmbajtja e Automjeteve",
      description: "Aplikacion që lidhet me diagnostikimin në bord të automjetit për të monitoruar performancën në kohë reale.",
      icon: <Car className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Siguria e Shtëpisë",
      description: "Aplikacion gjithëpërfshirës që integrohet me kamera dhe alarme të mençura për sigurinë tuaj.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Kujdesi për të Moshuarit",
      description: "Aplikacion që përdor pajisje IoT për të monitoruar shëndetin dhe sigurinë e individëve të moshuar.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Menaxhimi i Energjisë",
      description: "Aplikacion që monitoron dhe optimizon konsumin e energjisë në kohë reale për efikasitet maksimal.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Dizajn dhe Zhvillim i Aplikacioneve Web",
      description: "Krijojmë aplikacione web funksionale dhe tërheqëse për të plotësuar nevojat e biznesit tuaj dhe për të përmirësuar angazhimin e përdoruesve.",
      icon: <AppWindow className='w-8 h-8' />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Zhvillimi i Aplikacioneve Mobile",
      description: "Aplikacione mobile të personalizuara për t'u përshtatur me nevojat e përdoruesve tuaj dhe për të ofruar përvoja të shkëlqyera në pajisjet mobile.",
      icon: <TabletSmartphone className='w-8 h-8' />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Zgjidhje me Inteligjencë Artificiale",
      description: "Përdorim inteligjencën artificiale për të krijuar zgjidhje inovative që optimizojnë proceset dhe përmirësojnë vendimmarrjen në biznesin tuaj.",
      icon: <Brain className='w-8 h-8' />,
      color: "from-teal-500 to-teal-600"
    }
];
