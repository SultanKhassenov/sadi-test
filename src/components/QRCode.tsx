import { useEffect, useRef } from "react";
import QRCodeLib from 'qrcode';

interface QRCodeProps {
  value: string;
  size?: number;
  logoSrc?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ 
  value, 
  size = 112, 
  logoSrc 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQR = async () => {
      if (!canvasRef.current) return;

      try {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return;

        // Генерируем QR код
        await QRCodeLib.toCanvas(canvas, value, {
          width: size,
          margin: 1,
          errorCorrectionLevel: 'H', // High - позволяет добавить лого по центру
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });

        if (logoSrc) {
          // Загружаем логотип
          const logoImg = new Image();
          logoImg.crossOrigin = 'anonymous';
          logoImg.onload = () => {
            // Добавляем лого по центру
            const logoSize = size * 0.25; // 25% от размера QR
            const logoX = (size - logoSize) / 2;
            const logoY = (size - logoSize) / 2;

            // Белый фон под лого
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(logoX - 4, logoY - 4, logoSize + 8, logoSize + 8);

            // Рисуем изображение логотипа
            ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
          };
          logoImg.src = logoSrc;
        }

      } catch (error) {
        console.error('QR generation error:', error);
      }
    };

    generateQR();
  }, [value, size, logoSrc]);

  return (
    <canvas 
      ref={canvasRef} 
      width={size} 
      height={size}
    />
  );
};

export default QRCode;