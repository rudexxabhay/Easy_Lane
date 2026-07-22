import mongoose from 'mongoose';

const siteContentSchema = new mongoose.Schema({
  key: { type: String, unique: true, default: 'homepage' },
  hero: { title: { type: String, required: true }, highlightedTitle: { type: String, required: true }, description: { type: String, required: true } },
  cta: { title: { type: String, required: true }, description: { type: String, required: true } },
  trustedLogos: {
    enabled: { type: Boolean, default: true },
    animationEnabled: { type: Boolean, default: true },
    animationSpeed: { type: String, enum: ['slow', 'normal', 'fast'], default: 'normal' },
  },
  socialLinks: {
    linkedin: { type: String, trim: true, maxlength: 2048, default: '' },
    facebook: { type: String, trim: true, maxlength: 2048, default: '' },
    youtube: { type: String, trim: true, maxlength: 2048, default: '' },
    twitter: { type: String, trim: true, maxlength: 2048, default: '' },
  },
  navigationLinks: [{
    label: { type: String, required: true, trim: true, maxlength: 80 },
    url: { type: String, required: true, trim: true, maxlength: 2048 },
    location: { type: String, enum: ['header', 'footer'], required: true },
    group: { type: String, trim: true, maxlength: 80, default: '' },
    order: { type: Number, default: 0 },
    enabled: { type: Boolean, default: true },
    newTab: { type: Boolean, default: false },
  }],
}, { timestamps: true });

export const defaultContent = {
  key: 'homepage',
  hero: { title: 'Smarter Logistics.', highlightedTitle: 'Stronger Business.', description: 'One intelligent platform to manage fleets, operations, finance and people, In real time.' },
  cta: { title: 'Ready to Transform Your Logistics Operations?', description: 'Join hundreds of businesses moving smarter, faster and better with Easy Lane.' },
  trustedLogos: { enabled: true, animationEnabled: true, animationSpeed: 'normal' },
  socialLinks: { linkedin: '', facebook: '', youtube: '', twitter: '' },
  navigationLinks: [],
};
export const SiteContent = mongoose.model('SiteContent', siteContentSchema);
