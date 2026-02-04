import React, { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    class Star {
      constructor() {
        this.reset(true);
      }

      reset(randomZ = false) {
        this.x = (Math.random() - 0.5) * canvas.width * 2;
        this.y = (Math.random() - 0.5) * canvas.height * 2;
        this.z = randomZ ? Math.random() * canvas.width : canvas.width;
        this.pz = this.z;
        this.vx = (Math.random() - 0.5) * 2; 
        this.vy = (Math.random() - 0.5) * 2; 
      }

      update(speed) {
        this.pz = this.z;
        this.z -= speed;
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.z < 1) {
          this.reset();
        }
      }

      show() {
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const sx = ((this.x / this.z) * canvas.width / 2) + x;
        const sy = ((this.y / this.z) * canvas.height / 2) + y;
        const r = (1 - this.z / canvas.width) * 4;
        const alpha = (1 - this.z / canvas.width) * 0.6; 

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();

        const px = ((this.x / this.pz) * canvas.width / 2) + x;
        const py = ((this.y / this.pz) * canvas.height / 2) + y;

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`; 
        ctx.lineWidth = r;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
    }

    const stars = [];
    const starCount = 150; 
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    let speed = 6;
    let animationFrameId;
    const animate = () => {
      ctx.fillStyle = 'rgba(15, 15, 15, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();

      stars.forEach(star => {
        star.update(speed);
        star.show();
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    ctx.fillStyle = 'rgb(15, 15, 15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    animate();

    const handleResize = () => {
      resizeCanvas();
      ctx.fillStyle = 'rgb(15, 15, 15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarfieldBackground;
