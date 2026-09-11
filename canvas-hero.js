/* ==========================================================================
   GALAVERSE CREATIONS - HYPNOTIC GALACTIC VOID & SINGULARITY ENGINE
   High-performance procedural accretion disk, gravitational lensing, 3D starfield,
   and dynamic cosmic vortex reacting to mouse gravitation.
   Optimized for 60 FPS mobile/desktop with IntersectionObserver & adaptive fidelity.
   ========================================================================== */

(function () {
    'use strict';

    class GalacticVoid {
        constructor() {
            this.canvas = document.getElementById('hero-canvas');
            if (!this.canvas) return;

            this.ctx = this.canvas.getContext('2d', { alpha: true });
            if (!this.ctx) return;

            this.isMobile = window.innerWidth < 768;
            // Cap pixelRatio to 1 on mobile to prevent slow GPU fillrate, 1.5 on desktop
            this.pixelRatio = this.isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
            
            this.time = 0;
            this.isRunning = false;
            this.isVisible = true;
            this.animationId = null;

            this.mouse = { x: null, y: null, active: false };
            this.vortex = { x: 0, y: 0, currentX: 0, currentY: 0, radius: 140 };
            
            this.stars3D = [];
            this.vortexParticles = [];
            this.gravitationalRings = [];
            
            this.init();
        }

        init() {
            this.resize();
            this.create3DStars();
            this.createVortexParticles();
            this.createRings();
            this.bindEvents();
            this.setupVisibilityObserver();
            this.start();
        }

        resize() {
            const parent = this.canvas.parentElement || document.body;
            this.width = parent.clientWidth;
            this.height = parent.clientHeight || window.innerHeight;

            this.canvas.width = Math.floor(this.width * this.pixelRatio);
            this.canvas.height = Math.floor(this.height * this.pixelRatio);
            this.canvas.style.width = `${this.width}px`;
            this.canvas.style.height = `${this.height}px`;

            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(this.pixelRatio, this.pixelRatio);

            this.vortex.x = this.width * 0.5;
            this.vortex.y = this.height * 0.45;
            if (this.vortex.currentX === 0) {
                this.vortex.currentX = this.vortex.x;
                this.vortex.currentY = this.vortex.y;
            }
            this.vortex.radius = Math.min(this.width, this.height) * 0.22;
        }

        create3DStars() {
            this.stars3D = [];
            // Adaptive star count: fewer on mobile to conserve CPU
            const maxStars = this.isMobile ? 36 : 110;
            const count = Math.min(Math.floor((this.width * this.height) / (this.isMobile ? 18000 : 9000)), maxStars);

            for (let i = 0; i < count; i++) {
                this.stars3D.push({
                    x: (Math.random() - 0.5) * this.width * 2,
                    y: (Math.random() - 0.5) * this.height * 2,
                    z: Math.random() * this.width,
                    baseAlpha: Math.random() * 0.7 + 0.3,
                    color: Math.random() > 0.4 ? '#00f2fe' : (Math.random() > 0.5 ? '#a855f7' : '#ffffff')
                });
            }
        }

        createVortexParticles() {
            this.vortexParticles = [];
            // Adaptive vortex count: 45 on mobile, 140 on desktop
            const maxParticles = this.isMobile ? 45 : 140;
            const count = Math.min(Math.floor((this.width * this.height) / (this.isMobile ? 14000 : 7500)), maxParticles);

            for (let i = 0; i < count; i++) {
                this.vortexParticles.push(this.spawnVortexParticle(true));
            }
        }

        spawnVortexParticle(randomDistance = false) {
            const angle = Math.random() * Math.PI * 2;
            const maxR = Math.max(this.width, this.height) * 0.65;
            const minR = this.vortex.radius * 0.45;
            const distance = randomDistance 
                ? minR + Math.pow(Math.random(), 1.5) * (maxR - minR)
                : maxR * (0.85 + Math.random() * 0.2);

            const isCyan = Math.random() > 0.45;
            return {
                angle: angle,
                distance: distance,
                speed: (0.003 + (1 / (distance * 0.08 + 10)) * 0.05) * (Math.random() * 0.4 + 0.8),
                radialInwardSpeed: Math.random() * 0.4 + 0.25,
                size: Math.random() * 2.0 + 0.8,
                alpha: Math.random() * 0.7 + 0.3,
                hue: isCyan ? '0, 242, 254' : (Math.random() > 0.5 ? '168, 85, 247' : '99, 102, 241')
            };
        }

        createRings() {
            this.gravitationalRings = [
                { baseRadius: 0.6, speed: 0.008, phase: 0, color: 'rgba(0, 242, 254, 0.12)' },
                { baseRadius: 0.85, speed: 0.005, phase: Math.PI / 3, color: 'rgba(168, 85, 247, 0.14)' },
                { baseRadius: 1.15, speed: 0.003, phase: Math.PI, color: 'rgba(56, 189, 248, 0.08)' }
            ];
        }

        bindEvents() {
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    this.isMobile = window.innerWidth < 768;
                    this.pixelRatio = this.isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
                    this.resize();
                    this.create3DStars();
                    this.createVortexParticles();
                }, 200);
            }, { passive: true });

            if (!this.isMobile) {
                const hero = document.getElementById('home') || window;
                hero.addEventListener('mousemove', (e) => {
                    const rect = this.canvas.getBoundingClientRect();
                    this.mouse.x = e.clientX - rect.left;
                    this.mouse.y = e.clientY - rect.top;
                    this.mouse.active = true;
                }, { passive: true });

                hero.addEventListener('mouseleave', () => {
                    this.mouse.active = false;
                }, { passive: true });
            }
        }

        setupVisibilityObserver() {
            // Pause animation when scrolled down to save 100% CPU on mobile
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.isVisible = true;
                            this.start();
                        } else {
                            this.isVisible = false;
                            this.stop();
                        }
                    });
                }, { threshold: 0.05 });
                observer.observe(this.canvas);
            }
        }

        start() {
            if (!this.isRunning && this.isVisible) {
                this.isRunning = true;
                this.animate();
            }
        }

        stop() {
            this.isRunning = false;
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
        }

        updateVortexCenter() {
            const targetX = this.mouse.active ? this.vortex.x + (this.mouse.x - this.vortex.x) * 0.15 : this.vortex.x;
            const targetY = this.mouse.active ? this.vortex.y + (this.mouse.y - this.vortex.y) * 0.15 : this.vortex.y;

            this.vortex.currentX += (targetX - this.vortex.currentX) * 0.05;
            this.vortex.currentY += (targetY - this.vortex.currentY) * 0.05;
        }

        drawDeepSpaceGlow() {
            const cx = this.vortex.currentX;
            const cy = this.vortex.currentY;
            const gradRadius = this.vortex.radius * 2.8;

            const radGrad = this.ctx.createRadialGradient(cx, cy, 10, cx, cy, gradRadius);
            radGrad.addColorStop(0, 'rgba(0, 242, 254, 0.09)');
            radGrad.addColorStop(0.35, 'rgba(168, 85, 247, 0.06)');
            radGrad.addColorStop(0.7, 'rgba(15, 23, 42, 0.02)');
            radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            this.ctx.fillStyle = radGrad;
            this.ctx.fillRect(0, 0, this.width, this.height);
        }

        draw3DStars() {
            const cx = this.width * 0.5;
            const cy = this.height * 0.5;

            for (let i = 0; i < this.stars3D.length; i++) {
                const s = this.stars3D[i];
                s.z -= 0.6;
                if (s.z <= 0) {
                    s.z = this.width;
                    s.x = (Math.random() - 0.5) * this.width * 2;
                    s.y = (Math.random() - 0.5) * this.height * 2;
                }

                const k = 250 / s.z;
                const px = s.x * k + cx;
                const py = s.y * k + cy;

                if (px >= 0 && px <= this.width && py >= 0 && py <= this.height) {
                    const size = Math.max(0.6, (1 - s.z / this.width) * 1.8);
                    const alpha = Math.min(1, Math.max(0.1, (1 - s.z / this.width) * s.baseAlpha));

                    this.ctx.save();
                    this.ctx.fillStyle = s.color;
                    this.ctx.globalAlpha = alpha;
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, size, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.restore();
                }
            }
        }

        drawGravitationalRings() {
            const cx = this.vortex.currentX;
            const cy = this.vortex.currentY;

            for (let ring of this.gravitationalRings) {
                ring.phase += ring.speed;
                const rX = this.vortex.radius * ring.baseRadius * (1 + Math.sin(ring.phase) * 0.08);
                const rY = rX * 0.38;

                this.ctx.save();
                this.ctx.strokeStyle = ring.color;
                this.ctx.lineWidth = 1.2;
                this.ctx.beginPath();
                this.ctx.ellipse(cx, cy, rX, rY, -Math.PI / 10, 0, Math.PI * 2);
                this.ctx.stroke();
                this.ctx.restore();
            }
        }

        drawVortexParticles() {
            const cx = this.vortex.currentX;
            const cy = this.vortex.currentY;
            const minHorizon = this.vortex.radius * 0.42;

            for (let i = 0; i < this.vortexParticles.length; i++) {
                const p = this.vortexParticles[i];

                p.angle += p.speed;
                p.distance -= p.radialInwardSpeed;

                const tilt = -Math.PI / 12;
                const cosT = Math.cos(tilt);
                const sinT = Math.sin(tilt);

                const rawX = Math.cos(p.angle) * p.distance;
                const rawY = Math.sin(p.angle) * (p.distance * 0.38);

                const x = cx + (rawX * cosT - rawY * sinT);
                const y = cy + (rawX * sinT + rawY * cosT);

                const depthAlpha = Math.min(1, Math.max(0.15, (p.distance / (this.width * 0.4)) * p.alpha));

                this.ctx.save();
                this.ctx.fillStyle = `rgba(${p.hue}, ${depthAlpha})`;
                // Disable shadowBlur on mobile for massive CPU/GPU savings
                if (!this.isMobile && p.size > 1.4) {
                    this.ctx.shadowBlur = 6;
                    this.ctx.shadowColor = `rgba(${p.hue}, 0.8)`;
                }
                this.ctx.beginPath();
                this.ctx.arc(x, y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();

                if (p.distance <= minHorizon) {
                    this.vortexParticles[i] = this.spawnVortexParticle(false);
                }
            }
        }

        drawEventHorizon() {
            const cx = this.vortex.currentX;
            const cy = this.vortex.currentY;
            const horizonR = this.vortex.radius * 0.32;

            // Blazing photon ring
            this.ctx.save();
            this.ctx.strokeStyle = '#00f2fe';
            if (!this.isMobile) {
                this.ctx.shadowBlur = 18;
                this.ctx.shadowColor = '#00f2fe';
            }
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(cx, cy, horizonR * 1.35, horizonR * 0.55, -Math.PI / 12, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.restore();

            // Singularity Void
            this.ctx.save();
            this.ctx.fillStyle = '#05070a';
            this.ctx.beginPath();
            this.ctx.ellipse(cx, cy, horizonR * 1.3, horizonR * 0.52, -Math.PI / 12, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        animate() {
            if (!this.isRunning) return;

            this.time++;
            this.ctx.clearRect(0, 0, this.width, this.height);

            this.updateVortexCenter();
            this.drawDeepSpaceGlow();
            this.draw3DStars();
            this.drawGravitationalRings();
            this.drawVortexParticles();
            this.drawEventHorizon();

            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }

    // Defer initialization to avoid blocking First Contentful Paint / LCP
    function startEngine() {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => new GalacticVoid(), { timeout: 1000 });
        } else {
            setTimeout(() => new GalacticVoid(), 150);
        }
    }

    if (document.readyState === 'complete') {
        startEngine();
    } else {
        window.addEventListener('load', startEngine, { once: true });
    }
})();
