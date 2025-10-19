import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/79781234567', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] text-white"
      size="icon"
    >
      <Icon name="MessageCircle" size={28} />
    </Button>
  );
};

export default WhatsAppButton;
