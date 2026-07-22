import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({ body: { type: String, trim: true, maxlength: 2000, required: true }, createdAt: { type: Date, default: Date.now } }, { _id: true });
const activitySchema = new mongoose.Schema({ type: { type: String, required: true }, detail: { type: String, trim: true, maxlength: 500, default: '' }, createdAt: { type: Date, default: Date.now } }, { _id: true });

const leadSchema = new mongoose.Schema({
  bookingId: { type: String, unique: true, immutable: true, index: true },
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 120 },
  email: { type: String, required: true, trim: true, lowercase: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { type: String, required: true, trim: true, minlength: 7, maxlength: 30 },
  company: { type: String, trim: true, maxlength: 160, default: '' },
  jobTitle: { type: String, trim: true, maxlength: 120, default: '' },
  fleetSize: { type: String, trim: true, maxlength: 80, default: '' },
  interestedModule: { type: String, trim: true, maxlength: 120, default: '' },
  source: { type: String, trim: true, maxlength: 80, default: 'Website' },
  message: { type: String, trim: true, maxlength: 3000, default: '' },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'scheduled', 'won', 'lost'], default: 'new', index: true },
  notes: { type: [noteSchema], default: [] },
  activity: { type: [activitySchema], default: () => [{ type: 'created', detail: 'Lead created' }] },
  archived: { type: Boolean, default: false, index: true },
}, { timestamps: true });

leadSchema.index({ email: 1, archived: 1 }, { unique: true, partialFilterExpression: { archived: false } });
leadSchema.pre('validate', function assignBookingId(next) {
  if (!this.bookingId) this.bookingId = `EL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  next();
});

export const Lead = mongoose.model('Lead', leadSchema);
