/* ==========================================================================
   GALAVERSE CREATIONS - HYPNOTIC GALACTIC VOID & SINGULARITY ENGINE
   Real-time procedural accretion disk, gravitational lensing, 3D starfield,
   and dynamic cosmic vortex reacting to mouse gravitation.
   ========================================================================== */

(function () {
    'use strict';

    class GalacticVoid {
        constructor() {
            this.canvas = document.getElementById('hero-canvas');
            if (!this.canvas) return;

            this.ctx = this.canvas.getContext('2d');
            this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            
            this.time = 0;
            this.mouse = { x: null, y: null, targetX: null, targetY: null, active: false };
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
            const count = Math.min(Math.floor((this.width * this.height) / 7000), 180);
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
            // Swirling accretion disk particles
            const count = Math.min(Math.floor((this.width * this.height) / 5500), 220);
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
                size: Math.random() * 2.2 + 0.8,
                alpha: Math.random() * 0.7 + 0.3,
                hue: isCyan ? '0, 242, 254' : (Math.random() > 0.5 ? '168, 85, 247' : '99, 102, 241'),
                tail: []
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
            window.addEventListener('resize', () => {
                this.resize();
                this.create3DStars();
            }, { passive: true });

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

        updateVortexCenter() {
            // Smoothly gravitate singularity towards mouse position with subtle easing
            const targetX = this.mouse.active ? this.vortex.x + (this.mouse.x - this.vortex.x) * 0.15 : this.vortex.x;
            const targetY = this.mouse.active ? this.vortex.y + (this.mouse.y - this.vortex.y) * 0.15 : this.vortex.y;

            this.vortex.currentX += (targetX - this.vortex.currentX) * 0.05;
            this.vortex.currentY += (targetY - this.vortex.currentY) * 0.05;
        }

        drawDeepSpaceGlow() {
            const cx = this.vortex.currentX;
            const cy = this.vortex.currentY;

            // Cosmic atmospheric breath
            const breath = Math.sin(this.time * 0.03) * 20;

            // 1. Vast outer nebula aura
            const outerGrad = this.ctx.createRadialGradient(cx, cy, 50, cx, cy, this.vortex.radius * 3.2 + breath);
            outerGrad.addColorStop(0, 'rgba(13, 18, 32, 0.85)');
            outerGrad.addColorStop(0.35, 'rgba(88, 28, 135, 0.18)');
            outerGrad.addColorStop(0.65, 'rgba(6, 78, 99, 0.12)');
            outerGrad.addColorStop(1, 'rgba(5, 7, 10, 0)');
            
            this.ctx.fillStyle = outerGrad;
            this.ctx.fillRect(0, 0, this.width, this.height);

            // 2. Swirling glowing plasma halo around the event horizon
            const haloGrad = this.ctx.createRadialGradient(cx, cy, this.vortex.radius * 0.25, cx, cy, this.vortex.radius * 1.3);
            haloGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
            haloGrad.addColorStop(0.35, 'rgba(0, 242, 254, 0.25)');
            haloGrad.addColorStop(0.6, 'rgba(168, 85, 247, 0.22)');
            haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            this.ctx.fillStyle = haloGrad;
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, this.vortex.radius * 1.4, 0, Math.PI * 2);
            this.ctx.fill();
        }

        draw3DStars() {
            const cx = this.width * 0.5;
            const cy = this.height * 0.5;

            for (let i = 0; i < this.stars3D.length; i++) {
                const s = this.stars3D[i];
                // Move towards viewer (cosmic depth warp)
                s.z -= 0.65;
                if (s.z <= 0) {
                    s.z = this.width;
                    s.x = (Math.random() - 0.5) * this.width * 2;
                    s.y = (Math.random() - 0.5) * this.height * 2;
                }

                const k = 250 / s.z;
                const px = s.x * k + cx;
                const py = s.y * k + cy;

                if (px >= 0 && px <= this.width && py >= 0 && py <= this.height) {
                    const size = Math.max(0.6, (1 - s.z / this.width) * 2.2);
                    const alpha = Math.min(1, (1 - s.z / this.width) * s.baseAlpha);

                    this.ctx.save();
                    this.ctx.globalAlpha = alpha;
                    this.ctx.fillStyle = s.color;
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

            this.gravitationalRings.forEach(ring => {
                ring.phase += ring.speed;
                const r = this.vortex.radius * ring.baseRadius + Math.sin(ring.phase) * 12;

                this.ctx.save();
                this.ctx.strokeStyle = ring.color;
                this.ctx.lineWidth = 1.2;
                
                // Elliptical tilted perspective for 3D accretion disc look
                this.ctx.beginPath();
                this.ctx.ellipse(cx, cy, r * 1.4, r * 0.55, -Math.PI / 12, 0, Math.PI * 2);
                this.ctx.stroke();
                this.ctx.restore();
            });
        }

        drawVortexParticles() {
            const cx = this.vortex.currentX;
            const cy = this.vortex.currentY;
            const minHorizon = this.vortex.radius * 0.28;

            for (let i = 0; i < this.vortexParticles.length; i++) {
                const p = this.vortexParticles[i];

                // Orbital motion: Faster closer to the void (Keplerian)
                const orbitalSpeed = p.speed * (this.vortex.radius / Math.max(p.distance, 40));
                p.angle += orbitalSpeed;

                // Suction: Gravity gently pulls inwards
                p.distance -= p.radialInwardSpeed * (1 + (this.vortex.radius / Math.max(p.distance, 50)));

                // Calculate elliptical 3D tilted coordinates
                const rx = p.distance * 1.35;
                const ry = p.distance * 0.58;
                const cosA = Math.cos(p.angle);
                const sinA = Math.sin(p.angle);
                const tilt = -Math.PI / 12;

                const rawX = rx * cosA;
                const rawY = ry * sinA;
                const px = cx + (rawX * Math.cos(tilt) - rawY * Math.sin(tilt));
                const py = cy + (rawX * Math.sin(tilt) + rawY * Math.cos(tilt));

                // Save tail for glowing comet motion blur
                p.tail.push({ x: px, y: py });
                if (p.tail.length > 5) p.tail.shift();

                // Draw tail filament
                if (p.tail.length > 1) {
                    this.ctx.save();
                    this.ctx.strokeStyle = `rgba(${p.hue}, ${p.alpha * 0.4})`;
                    this.ctx.lineWidth = p.size * 0.8;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.tail[0].x, p.tail[0].y);
                    for (let t = 1; t < p.tail.length; t++) {
                        this.ctx.lineTo(p.tail[t].x, p.tail[t].y);
                    }
                    this.ctx.stroke();
                    this.ctx.restore();
                }

                // Draw luminous particle head
                this.ctx.save();
                this.ctx.globalAlpha = p.alpha;
                this.ctx.fillStyle = `rgb(${p.hue})`;
                this.ctx.shadowBlur = 8;
                this.ctx.shadowColor = `rgb(${p.hue})`;
                this.ctx.beginPath();
                this.ctx.arc(px, py, p.size, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();

                // Respawn at outer perimeter if consumed by event horizon
                if (p.distance <= minHorizon) {
                    this.vortexParticles[i] = this.spawnVortexParticle(false);
                }
            }
        }

        drawEventHorizon() {
            const cx = this.vortex.currentX;
            const cy = this.vortex.currentY;
            const horizonR = this.vortex.radius * 0.32;

            // Blazing photon ring (light bending around black hole)
            this.ctx.save();
            this.ctx.strokeStyle = '#00f2fe';
            this.ctx.shadowBlur = 22;
            this.ctx.shadowColor = '#00f2fe';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.ellipse(cx, cy, horizonR * 1.35, horizonR * 0.55, -Math.PI / 12, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.restore();

            // The Pitch Black Singularity Void
            this.ctx.save();
            this.ctx.fillStyle = '#05070a';
            this.ctx.shadowBlur = 30;
            this.ctx.shadowColor = '#000000';
            this.ctx.beginPath();
            this.ctx.ellipse(cx, cy, horizonR * 1.3, horizonR * 0.52, -Math.PI / 12, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        animate() {
            this.time++;

            // Clear frame
            this.ctx.clearRect(0, 0, this.width, this.height);

            this.updateVortexCenter();
            this.drawDeepSpaceGlow();
            this.draw3DStars();
            this.drawGravitationalRings();
            this.drawVortexParticles();
            this.drawEventHorizon();

            requestAnimationFrame(() => this.animate());
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new GalacticVoid());
    } else {
        new GalacticVoid();
    }
})();
