import mongoose from 'mongoose';

const promoSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true, trim: true },
  type: { type: String, required: true, enum: ['fixed_price', 'free'] },
  amountCents: { type: Number, default: 0 }, // for fixed_price; 0 for free
  public: { type: Boolean, default: false }, // if true, can be shown on site (carousel, cards)
  validFrom: { type: Date },
  validUntil: { type: Date },
  usageCap: { type: Number }, // max total redemptions (optional)
  usageCapPerCourse: { type: Number }, // max redemptions per course (e.g. 100 for SPRING2026)
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

promoSchema.index({ code: 1 });
promoSchema.index({ public: 1, isActive: 1 });

export default mongoose.model('Promo', promoSchema);
