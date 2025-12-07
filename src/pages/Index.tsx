import { useState } from 'react';
import { ShoppingCart, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

type WearCondition = 'Factory New' | 'Minimal Wear' | 'Field-Tested' | 'Well-Worn' | 'Battle-Scarred';
type ItemType = 'knife' | 'gloves';
type Rarity = 'Covert' | 'Classified' | 'Restricted';

interface SkinItem {
  id: string;
  name: string;
  type: ItemType;
  image: string;
  rarity: Rarity;
  wearOptions: {
    condition: WearCondition;
    price: number;
  }[];
}

const skins: SkinItem[] = [
  {
    id: '1',
    name: '★ Karambit | Fade',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1621934292097-0f29f6f4b96e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 48500 },
      { condition: 'Minimal Wear', price: 42000 },
    ],
  },
  {
    id: '2',
    name: '★ Butterfly Knife | Doppler',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 38900 },
      { condition: 'Minimal Wear', price: 35200 },
      { condition: 'Field-Tested', price: 31500 },
    ],
  },
  {
    id: '3',
    name: '★ M9 Bayonet | Gamma Doppler',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 28700 },
      { condition: 'Minimal Wear', price: 25400 },
    ],
  },
  {
    id: '4',
    name: '★ Bayonet | Tiger Tooth',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1621934292097-0f29f6f4b96e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 18200 },
      { condition: 'Minimal Wear', price: 16800 },
    ],
  },
  {
    id: '5',
    name: '★ Flip Knife | Marble Fade',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 15900 },
      { condition: 'Minimal Wear', price: 14200 },
    ],
  },
  {
    id: '6',
    name: '★ Gut Knife | Autotronic',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1621934292097-0f29f6f4b96e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 9500 },
      { condition: 'Minimal Wear', price: 8700 },
      { condition: 'Field-Tested', price: 7800 },
    ],
  },
  {
    id: '7',
    name: '★ Stiletto Knife | Case Hardened',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 12300 },
      { condition: 'Minimal Wear', price: 10900 },
      { condition: 'Field-Tested', price: 9200 },
      { condition: 'Well-Worn', price: 7800 },
    ],
  },
  {
    id: '8',
    name: '★ Ursus Knife | Slaughter',
    type: 'knife',
    image: 'https://images.unsplash.com/photo-1621934292097-0f29f6f4b96e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 11200 },
      { condition: 'Minimal Wear', price: 9800 },
    ],
  },
  {
    id: '9',
    name: '★ Sport Gloves | Pandora\'s Box',
    type: 'gloves',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 47500 },
      { condition: 'Minimal Wear', price: 41200 },
      { condition: 'Field-Tested', price: 36800 },
    ],
  },
  {
    id: '10',
    name: '★ Driver Gloves | Crimson Weave',
    type: 'gloves',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 35900 },
      { condition: 'Minimal Wear', price: 31200 },
      { condition: 'Field-Tested', price: 27400 },
    ],
  },
  {
    id: '11',
    name: '★ Specialist Gloves | Fade',
    type: 'gloves',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 28700 },
      { condition: 'Minimal Wear', price: 24900 },
    ],
  },
  {
    id: '12',
    name: '★ Hand Wraps | Slaughter',
    type: 'gloves',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rarity: 'Covert',
    wearOptions: [
      { condition: 'Factory New', price: 19800 },
      { condition: 'Minimal Wear', price: 17200 },
      { condition: 'Field-Tested', price: 15100 },
    ],
  },
  {
    id: '13',
    name: '★ Moto Gloves | Boom!',
    type: 'gloves',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rarity: 'Classified',
    wearOptions: [
      { condition: 'Factory New', price: 14500 },
      { condition: 'Minimal Wear', price: 12800 },
      { condition: 'Field-Tested', price: 10900 },
    ],
  },
  {
    id: '14',
    name: '★ Specialist Gloves | Tiger Strike',
    type: 'gloves',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rarity: 'Classified',
    wearOptions: [
      { condition: 'Factory New', price: 9200 },
      { condition: 'Minimal Wear', price: 8100 },
      { condition: 'Field-Tested', price: 6800 },
      { condition: 'Well-Worn', price: 5900 },
    ],
  },
  {
    id: '15',
    name: '★ Bloodhound Gloves | Snakebite',
    type: 'gloves',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rarity: 'Classified',
    wearOptions: [
      { condition: 'Minimal Wear', price: 7200 },
      { condition: 'Field-Tested', price: 6100 },
      { condition: 'Well-Worn', price: 5300 },
    ],
  },
];

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<SkinItem | null>(null);
  const [selectedWear, setSelectedWear] = useState<WearCondition | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | ItemType>('all');
  const [priceRange, setPriceRange] = useState<'all' | '5-10' | '10-20' | '20-50'>('all');
  const [cart, setCart] = useState<Array<{ item: SkinItem; wear: WearCondition; price: number }>>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [tradeLink, setTradeLink] = useState('');

  const filteredSkins = skins.filter((skin) => {
    const matchesSearch = skin.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || skin.type === filterType;
    
    if (!matchesSearch || !matchesType) return false;

    if (priceRange === 'all') return true;
    
    const minPrice = Math.min(...skin.wearOptions.map(w => w.price));
    
    if (priceRange === '5-10') return minPrice >= 5000 && minPrice < 10000;
    if (priceRange === '10-20') return minPrice >= 10000 && minPrice < 20000;
    if (priceRange === '20-50') return minPrice >= 20000 && minPrice <= 50000;
    
    return true;
  });

  const addToCart = () => {
    if (selectedItem && selectedWear) {
      const wearOption = selectedItem.wearOptions.find(w => w.condition === selectedWear);
      if (wearOption) {
        setCart([...cart, { item: selectedItem, wear: selectedWear, price: wearOption.price }]);
        setSelectedItem(null);
        setSelectedWear(null);
      }
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const getRarityColor = (rarity: Rarity) => {
    switch (rarity) {
      case 'Covert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Classified': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'Restricted': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              CS:GO Market
            </h1>
            <Button
              onClick={() => setShowCart(true)}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Корзина
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center rounded-full bg-secondary">
                  {cart.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Поиск скинов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <Select value={filterType} onValueChange={(v) => setFilterType(v as typeof filterType)}>
              <SelectTrigger className="w-full md:w-[180px] bg-card border-border">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все скины</SelectItem>
                <SelectItem value="knife">Ножи</SelectItem>
                <SelectItem value="gloves">Перчатки</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={(v) => setPriceRange(v as typeof priceRange)}>
              <SelectTrigger className="w-full md:w-[180px] bg-card border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все цены</SelectItem>
                <SelectItem value="5-10">5,000 - 10,000₽</SelectItem>
                <SelectItem value="10-20">10,000 - 20,000₽</SelectItem>
                <SelectItem value="20-50">20,000 - 50,000₽</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkins.map((skin) => (
            <Card
              key={skin.id}
              className="group cursor-pointer overflow-hidden border-border/40 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              onClick={() => {
                setSelectedItem(skin);
                setSelectedWear(skin.wearOptions[0].condition);
              }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={skin.image}
                  alt={skin.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-semibold text-foreground line-clamp-2 text-sm">
                    {skin.name}
                  </h3>
                  <Badge className={`${getRarityColor(skin.rarity)} shrink-0 text-xs`}>
                    {skin.rarity}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    От {Math.min(...skin.wearOptions.map(w => w.price)).toLocaleString('ru-RU')}₽
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {skin.wearOptions.length} вариантов
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedItem} onOpenChange={() => { setSelectedItem(null); setSelectedWear(null); }}>
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedItem && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">{selectedItem.name}</DialogTitle>
                <DialogDescription>
                  <Badge className={getRarityColor(selectedItem.rarity)}>
                    {selectedItem.rarity}
                  </Badge>
                </DialogDescription>
              </DialogHeader>
              
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Состояние износа:</label>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedItem.wearOptions.map((option) => (
                      <button
                        key={option.condition}
                        onClick={() => setSelectedWear(option.condition)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedWear === option.condition
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50 bg-muted/50'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{option.condition}</span>
                          <span className="text-xl font-bold text-primary">
                            {option.price.toLocaleString('ru-RU')}₽
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={addToCart}
                  disabled={!selectedWear}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Добавить в корзину
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showCart} onOpenChange={setShowCart}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Корзина</DialogTitle>
          </DialogHeader>
          
          {cart.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              Корзина пуста
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((cartItem, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{cartItem.item.name}</h4>
                    <p className="text-sm text-muted-foreground">{cartItem.wear}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{cartItem.price.toLocaleString('ru-RU')}₽</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCart(cart.filter((_, i) => i !== index))}
                      className="text-destructive hover:text-destructive/90"
                    >
                      Удалить
                    </Button>
                  </div>
                </div>
              ))}
              
              <Separator />
              
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Итого:</span>
                <span className="text-primary">{totalPrice.toLocaleString('ru-RU')}₽</span>
              </div>

              <Button
                onClick={() => {
                  setShowCart(false);
                  setShowCheckout(true);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Оформить заказ
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Оформление заказа</DialogTitle>
            <DialogDescription>
              Сумма к оплате: <span className="font-bold text-primary">{totalPrice.toLocaleString('ru-RU')}₽</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Трейд-ссылка Steam:</label>
              <Input
                value={tradeLink}
                onChange={(e) => setTradeLink(e.target.value)}
                placeholder="https://steamcommunity.com/tradeoffer/new/..."
                className="bg-background border-border"
              />
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border border-border space-y-2">
              <h4 className="font-semibold">Реквизиты для оплаты:</h4>
              <div className="text-sm space-y-1">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">СБП номер:</span>
                  <span className="font-mono">79822141678</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Карта:</span>
                  <span className="font-mono">2200 1536 0504 2952</span>
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
              <p className="text-sm text-muted-foreground">
                После оплаты отправьте трейд-ссылку и скриншот платежа в поддержку. 
                Скины будут отправлены в течение 5-10 минут.
              </p>
            </div>

            <Button
              onClick={() => {
                alert('Заказ оформлен! Ожидайте подтверждения оплаты.');
                setShowCheckout(false);
                setCart([]);
                setTradeLink('');
              }}
              disabled={!tradeLink}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Подтвердить заказ
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
