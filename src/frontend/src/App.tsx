import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

type ViewState = 'proposal' | 'success';

export default function App() {
  const [viewState, setViewState] = useState<ViewState>('proposal');
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    // Increment click count but cap at 4
    setNoClickCount((prev) => Math.min(prev + 1, 4));
  };

  const handleYesClick = () => {
    setViewState('success');
  };

  // Map click count to emoji and text
  const getEmojiAndText = () => {
    switch (noClickCount) {
      case 1:
        return { emoji: '😠', text: 'you said no?' };
      case 2:
        return { emoji: '😡', text: 'why are you doing that?' };
      case 3:
        return { emoji: '🥺', text: 'pleasee stoppp girllll' };
      case 4:
        return { emoji: '😭', text: 'you cant say no after this' };
      default:
        return null;
    }
  };

  // Calculate No button size based on click count
  const getNoButtonScale = () => {
    switch (noClickCount) {
      case 1:
        return 'scale-90';
      case 2:
        return 'scale-75';
      case 3:
        return 'scale-60';
      case 4:
        return 'scale-0 opacity-0'; // Hidden
      default:
        return 'scale-100';
    }
  };

  const emojiAndText = getEmojiAndText();

  if (viewState === 'success') {
    // Conditional message based on whether user clicked No before Yes
    const successMessage =
      noClickCount > 0
        ? 'iam the only one for you di venna dikki'
        : 'I love you di panni kutty, dont leave me keep me in your heart like this';

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 success-view">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Heart className="w-16 h-16 text-valentine-primary fill-valentine-primary animate-pulse-slow" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-valentine-primary leading-relaxed animate-romantic-message">
              {successMessage}
            </h1>
          </div>
          <div className="relative w-full max-w-lg mx-auto">
            <img
              src="/assets/generated/after-yes-photo.dim_736x1472.jpg"
              alt="Romantic couple photo"
              className="w-full h-auto rounded-3xl shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center">
            <Heart className="w-20 h-20 text-valentine-primary fill-valentine-primary animate-pulse-slow" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-valentine-primary leading-tight">
            Will you be my Valentine?
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={handleYesClick}
            size="lg"
            className="text-xl px-12 py-8 h-auto rounded-2xl bg-valentine-primary hover:bg-valentine-primary-hover text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Yes! 💕
          </Button>
          <Button
            onClick={handleNoClick}
            size="lg"
            variant="outline"
            className={`text-xl px-12 py-8 h-auto rounded-2xl border-2 border-valentine-muted text-valentine-muted hover:bg-valentine-muted/10 hover:border-valentine-muted/80 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold ${getNoButtonScale()}`}
          >
            No
          </Button>
        </div>

        {emojiAndText && (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <div className="text-8xl transition-all duration-500 ease-out">
              {emojiAndText.emoji}
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-valentine-primary">
              {emojiAndText.text}
            </p>
          </div>
        )}
      </div>

      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-valentine-muted">
        <p>
          Built with <Heart className="inline w-4 h-4 fill-valentine-accent text-valentine-accent" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              window.location.hostname
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-valentine-primary transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
        <p className="text-xs mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
