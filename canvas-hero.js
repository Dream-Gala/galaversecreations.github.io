/* ==========================================================================
   GALAVERSE CREATIONS - COSMIC CANVAS HERO ENGINE
   Interactive starfield, floating nebulae, mouse constellation reactive mesh.
   ========================================================================== */

(function () {
    'use strict';

    class CosmicCanvas {
        constructor() {
            this.canvas = document.getElementById('hero-canvas');
            if (!this.canvas) return;

            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.nebulae = [];
            this.mouse = { x: null, y: null, radius: 170 };
            this.animationFrameId = null;
            this.pixelRatio = window.devicePixelRatio || 1;

            this.init();
        }

        init() {
            this.resize();
            this.createNebulae();
            this.createParticles();
            this.bindEvents();
            this.animate();
        }

        resize() {
            const parent = this.canvas.parentElement || document.body;
            this.width = parent.clientWidth;
            this.height = parent.clientHeight || window.innerHeight;

            this.canvas.width = this.width * this.pixelRatio;
            this.canvas.height = this.height * this.pixelRatio;
            this.canvas.style.width = `${this.width}px`;
            this.canvas.style.height = `${this.height}px`;

            this.ctx.scale(this.pixelRatio, this.pixelRatio);
        }

        createNebulae() {
            this.nebulae = [
                { x: this.width * 0.2, y: this.height * 0.3, radius: 250, color: 'rgba(0, 242, 254, 0.07)' },
                { x: this.width * 0.8, y: this.height * 0.6, radius: 300, color: 'rgba(127, 0, 255, 0.08)' },
                { x: this.width * 0.5, y: this.height * 0.8, radius: 220, color: 'rgba(44, 110, 117, 0.09)' }
            ];
        }

        createParticles() {
            this.particles = [];
            // Quantity based on screen area
            const density = Math.floor((this.width * this.height) / 10000);
            const particleCount = Math.min(Math.max(density, 45), 110);

            for (let i = 0; i < particleCount; i++) {
                const isBright = Math.random() < 0.2;
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    vx: (Math.random() - 0.5) * 0.55,
                    vy: (Math.random() - 0.5) * 0.55,
                    radius: isBright ? Math.random() * 2.2 + 1.2 : Math.random() * 1.4 + 0.6,
                    baseAlpha: Math.random() * 0.6 + 0.2,
                    alpha: Math.random() * 0.6 + 0.2,
                    twinkleSpeed: Math.random() * 0.03 + 0.008,
                    color: isBright ? '#00f2fe' : (Math.random() > 0.5 ? '#7f00ff' : '#ffffff')
                });
            }
        }

        bindEvents() {
            window.addEventListener('resize', () => {
                this.resize();
                this.createNebulae();
                this.createParticles();
            }, { passive: true });

            const hero = document.getElementById('home') || window;

            hero.addEventListener('mousemove', (e) => {
                const rect = this.canvas.getBoundingClientRect();
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;
            }, { passive: true });

            hero.addEventListener('mouseleave', () => {
                this.mouse.x = null;
                this.mouse.y = null;
            }, { passive: true });
        }

        drawNebulae() {
            this.nebulae.forEach(n => {
                const grad = this.ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
                grad.addColorStop(0, n.color);
                grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                this.ctx.fillStyle = grad;
                this.ctx.beginPath();
                this.ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                this.ctx.fill();
            });
        }

        drawConstellations() {
            const maxDist = 130;
            const len = this.particles.length;

            for (let i = 0; i < len; i++) {
                for (let j = i + 1; j < len; j++) {
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.22;
                        this.ctx.strokeStyle = `rgba(75, 166, 176, ${alpha})`;
                        this.ctx.lineWidth = 0.7;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                        this.ctx.stroke();
                    }
                }
            }
        }

        drawMouseConnections() {
            if (this.mouse.x === null || this.mouse.y === null) return;

            this.particles.forEach(p => {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.mouse.radius) {
                    const force = (1 - dist / this.mouse.radius);
                    // Gentle magnetic pull
                    p.x -= (dx / dist) * force * 0.6;
                    p.y -= (dy / dist) * force * 0.6;

                    // Draw glowing connection line to cursor
                    this.ctx.strokeStyle = `rgba(0, 242, 254, ${force * 0.45})`;
                    this.ctx.lineWidth = 1 + force;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            });
        }

        updateParticles() {
            this.particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce at edges
                if (p.x < 0 || p.x > this.width) p.vx *= -1;
                if (p.y < 0 || p.y > this.height) p.vy *= -1;

                // Twinkle
                p.alpha += p.twinkleSpeed;
                if (p.alpha > 0.95 || p.alpha < 0.15) {
                    p.twinkleSpeed *= -1;
                }
            });
        }

        drawParticles() {
            this.particles.forEach(p => {
                this.ctx.save();
                this.ctx.globalAlpha = p.alpha;
                this.ctx.fillStyle = p.color;

                // Glowing effect for larger particles
                if (p.radius > 1.5) {
                    this.ctx.shadowBlur = 10;
                    this.ctx.shadowColor = p.color;
                }

                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();
            });
        }

        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);

            this.drawNebulae();
            this.updateParticles();
            this.drawConstellations();
            this.drawMouseConnections();
            this.drawParticles();

            this.animationFrameId = requestAnimationFrame(() => this.animate());
        }
    }

    // Initialize when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new CosmicCanvas());
    } else {
        new CosmicCanvas();
    }
})();
