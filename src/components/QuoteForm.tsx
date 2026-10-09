import React, { useState, useRef } from 'react';

export const SERVICES_LIST = [
  'Emergency plumbing',
  'Drain cleaning',
  'Water heaters',
  'Sewer line repair',
  'Burst pipe & leak repair',
  'Fixtures & installations',
  'Not sure',
] as const;

export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  // 11 digits (if starts with 1)
  return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
}

export function validateName(name: string): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) {
    return 'Name is required.';
  }
  if (trimmed.length < 2) {
    return 'Please enter at least 2 characters for your name.';
  }
  if (!/^[a-zA-Z\s'.\-]+$/.test(trimmed)) {
    return 'Name should only contain letters and standard characters.';
  }
  return undefined;
}

export function validatePhone(phone: string): string | undefined {
  const trimmed = phone.trim();
  if (!trimmed) {
    return 'Phone number is required.';
  }
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length === 0) {
    return 'Phone number is required.';
  }
  if (digits.length < 10) {
    return `Please enter a valid 10-digit phone number (${digits.length}/10 entered).`;
  }
  if (digits.length === 11 && !digits.startsWith('1')) {
    return '11-digit phone numbers must start with country code 1.';
  }
  if (digits.length > 11) {
    return 'Please enter a valid 10-digit phone number.';
  }
  return undefined;
}

export interface QuoteFormProps {
  variant?: 'hero' | 'cta' | 'modal';
  selectedService?: string;
  onServiceChange?: (service: string) => void;
  idPrefix?: string;
  className?: string;
  onSubmitted?: () => void;
}

export function QuoteForm({
  variant = 'cta',
  selectedService = 'Emergency plumbing',
  onServiceChange,
  idPrefix = 'quote-form',
  className = '',
  onSubmitted,
}: QuoteFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedService);
  const [message, setMessage] = useState('');

  const [touched, setTouched] = useState<{ name?: boolean; phone?: boolean }>({});
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  // Sync external selectedService changes if prop changes
  React.useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = e.target.value;
    setName(nextVal);
    if (touched.name || nextVal.trim().length > 0) {
      setTouched((prev) => ({ ...prev, name: true }));
      const err = validateName(nextVal);
      setErrors((prev) => ({ ...prev, name: err }));
    }
  };

  const handleNameBlur = () => {
    setTouched((prev) => ({ ...prev, name: true }));
    const err = validateName(name);
    setErrors((prev) => ({ ...prev, name: err }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    // Real-time error messaging
    if (touched.phone || formatted.length > 0) {
      setTouched((prev) => ({ ...prev, phone: true }));
      const err = validatePhone(formatted);
      setErrors((prev) => ({ ...prev, phone: err }));
    }
  };

  const handlePhoneBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
    const err = validatePhone(phone);
    setErrors((prev) => ({ ...prev, phone: err }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setService(val);
    onServiceChange?.(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, phone: true });
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);

    if (nameErr || phoneErr) {
      setErrors({ name: nameErr, phone: phoneErr });
      if (nameErr) {
        nameInputRef.current?.focus();
      } else if (phoneErr) {
        phoneInputRef.current?.focus();
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Temporary 'submitting' state
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      onSubmitted?.();
    } catch {
      // Handle error if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    setTouched({});
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div
        className={`bg-[#f4f4f4] border border-[#e5e7eb] rounded-[8px] p-[16px] sm:p-[20px] text-left ${className}`}
      >
        <div className="flex items-center gap-[8px] mb-[8px] text-left">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0000ee] shrink-0" />
          <span className="font-medium text-[17px] text-[#1a1a1a] text-left">
            Quote request received.
          </span>
        </div>
        <p className="font-body text-[#767676] text-[14px] sm:text-[15px] mb-[16px] text-left leading-[1.6]">
          We will contact you shortly at{' '}
          <strong className="text-[#1a1a1a] font-medium">{phone}</strong> to discuss
          your service request and provide an upfront price.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="font-medium text-[14px] sm:text-[15px] text-[#0000ee] underline hover:opacity-80 cursor-pointer text-left"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex flex-col gap-[14px] sm:gap-[18px] w-full text-left ${className}`}
    >
      {/* Name Field */}
      <div className="flex flex-col items-start text-left w-full">
        <label
          htmlFor={`${idPrefix}-name`}
          className="font-label text-[13px] sm:text-[14px] text-[#1a1a1a] mb-[6px] text-left"
        >
          Name <span className="text-[var(--error)]">*</span>
        </label>
        <input
          ref={nameInputRef}
          id={`${idPrefix}-name`}
          type="text"
          required
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          placeholder="Your full name"
          aria-invalid={!!(errors.name && touched.name)}
          aria-describedby={
            errors.name && touched.name ? `${idPrefix}-name-error` : undefined
          }
          className={`w-full max-w-full bg-[#ffffff] rounded-[8px] text-[#1a1a1a] font-normal transition-colors text-left focus:outline-none ${
            isHero ? 'p-[12px] text-[15px]' : 'p-[16px] text-[16px]'
          } ${
            errors.name && touched.name
              ? 'border-2 border-[var(--error)] ring-1 ring-[var(--error)]'
              : 'border border-[#e5e7eb] focus:ring-2 focus:ring-[#0000ee]'
          }`}
        />
        {errors.name && touched.name && (
          <p
            id={`${idPrefix}-name-error`}
            role="alert"
            className="font-label text-[12px] sm:text-[13px] text-[var(--error)] mt-[5px] text-left flex items-center gap-[5px]"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-[var(--error)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="flex flex-col items-start text-left w-full">
        <label
          htmlFor={`${idPrefix}-phone`}
          className="font-label text-[13px] sm:text-[14px] text-[#1a1a1a] mb-[6px] text-left"
        >
          Phone <span className="text-[var(--error)]">*</span>
        </label>
        <input
          ref={phoneInputRef}
          id={`${idPrefix}-phone`}
          type="tel"
          required
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          placeholder="(510) 000-0000"
          aria-invalid={!!(errors.phone && touched.phone)}
          aria-describedby={
            errors.phone && touched.phone ? `${idPrefix}-phone-error` : undefined
          }
          className={`w-full max-w-full bg-[#ffffff] rounded-[8px] text-[#1a1a1a] font-normal transition-colors text-left focus:outline-none ${
            isHero ? 'p-[12px] text-[15px]' : 'p-[16px] text-[16px]'
          } ${
            errors.phone && touched.phone
              ? 'border-2 border-[var(--error)] ring-1 ring-[var(--error)]'
              : 'border border-[#e5e7eb] focus:ring-2 focus:ring-[#0000ee]'
          }`}
        />
        {errors.phone && touched.phone && (
          <p
            id={`${idPrefix}-phone-error`}
            role="alert"
            className="font-label text-[12px] sm:text-[13px] text-[var(--error)] mt-[5px] text-left flex items-center gap-[5px]"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-[var(--error)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* Service Select */}
      <div className="flex flex-col items-start text-left w-full">
        <label
          htmlFor={`${idPrefix}-service`}
          className="font-label text-[13px] sm:text-[14px] text-[#1a1a1a] mb-[6px] text-left"
        >
          What&apos;s going on?
        </label>
        <div className="relative w-full">
          <select
            id={`${idPrefix}-service`}
            value={service}
            onChange={handleServiceChange}
            className={`w-full max-w-full bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] text-[#1a1a1a] font-normal appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0000ee] text-left pr-[36px] ${
              isHero ? 'p-[12px] text-[15px]' : 'p-[16px] text-[16px]'
            }`}
          >
            {SERVICES_LIST.map((srv) => (
              <option key={srv} value={srv}>
                {srv}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-[#767676]">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Optional Message Field for full CTA variant */}
      {!isHero && (
        <div className="flex flex-col items-start text-left w-full">
          <label
            htmlFor={`${idPrefix}-message`}
            className="font-label text-[13px] sm:text-[14px] text-[#1a1a1a] mb-[6px] text-left"
          >
            Message (optional)
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Brief description of the problem or home location"
            className="w-full max-w-full bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-[16px] text-[#1a1a1a] font-normal text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0000ee] resize-y text-left"
          />
        </div>
      )}

      {/* Submit Button with temporary 'submitting' state */}
      <div className="mt-[6px] sm:mt-[10px] flex flex-col items-start text-left w-full">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary-light justify-start text-left disabled:opacity-60 disabled:cursor-not-allowed ${
            isHero ? 'w-full py-[14px] min-h-[52px]' : 'w-full sm:w-auto'
          }`}
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-[10px] text-left">
              <svg
                className="animate-spin h-4 w-4 text-[#ffffff] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              <span>Submitting...</span>
            </span>
          ) : (
            <span>{isHero ? 'Request free quote' : 'Request my free quote'}</span>
          )}
        </button>
      </div>
    </form>
  );
}
