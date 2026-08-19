const SRC = 'https://esim-murex.vercel.app/mascots/Gemini_Generated_Image_2u6jrt2u6jrt2u6j.png';

type Pose = 'contact' | 'qr-run' | '5g-unlimited' | 'logo' | 'superhero';

type Props = {
  pose: Pose;
  className?: string;
  alt?: string;
};

const POSES: Record<Pose, string> = {
  contact: 'center 0%',
  'qr-run': 'center 25%',
  '5g-unlimited': 'center 50%',
  logo: 'center 75%',
  superhero: 'center 100%',
};

export default function MascotSprite({ pose, className = '', alt }: Props) {
  return (
    <div
      role="img"
      aria-label={alt ?? `LEXGO 吉祥物 – ${pose}`}
      className={`h-full w-full bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${SRC})`,
        backgroundPosition: POSES[pose],
        backgroundSize: '100% 500%',
      }}
    />
  );
}
