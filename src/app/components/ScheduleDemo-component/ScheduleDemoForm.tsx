'use client';
import { PopupModal } from "react-calendly";
import { useState, FormEvent, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface DemoFormProps {
  className?: string;
}

export function DemoForm({ className }: DemoFormProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  interface DarkSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: { label: string; value: string }[];
    placeholder: string;
  }

  function DarkSelect({ value, onChange, options, placeholder }: DarkSelectProps) {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          bg-gray-900/89
          border border-slate-700/50
          text-slate-200
          rounded-md
          px-3 py-2
          text-[13px] lg:text-sm
          focus:outline-none
          focus:border-[#e2472b]/60
          focus:ring-2
          focus:ring-[#e2472b]/20
          transition-all
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    companySize: '',
    timeline: '',
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsOpen(true);
      setFormData({ firstName: "", lastName: "", workEmail: "", phone: "", companySize: "", timeline: "" });
    }, 1000);
  };

  const [isOpen, setIsOpen] = useState(false);
console.log("Calendly URL:", calendlyUrl)
  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'space-y-4 lg:space-y-6',
        'w-full',
        'px-0',
        className
      )}
    >
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-3 lg:gap-4">
        <div className="space-y-1.5 lg:space-y-2">
          <Label className="text-[12.5px] lg:text-sm font-semibold text-slate-100 tracking-tight">
            First name <span className="text-red-400">*</span>
          </Label>
          <Input
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="
              h-9 lg:h-10
              text-[13px] lg:text-sm
              bg-slate-800/50 border-slate-700/50
              text-slate-100 placeholder:text-slate-500
              focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20
              rounded-md
            "
          />
        </div>

        <div className="space-y-1.5 lg:space-y-2">
          <Label className="text-[12.5px] lg:text-sm font-semibold text-slate-100 tracking-tight">
            Last name <span className="text-red-400">*</span>
          </Label>
          <Input
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="
              h-9 lg:h-10
              text-[13px] lg:text-sm
              bg-slate-800/50 border-slate-700/50
              text-slate-100 placeholder:text-slate-500
              focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20
              rounded-md
            "
          />
        </div>
      </div>

      {/* Work Email */}
      <div className="space-y-1.5 lg:space-y-2">
        <Label className="text-[12.5px] lg:text-sm font-semibold text-slate-100 tracking-tight">
          Work email <span className="text-red-400">*</span>
        </Label>
        <Input
          name="workEmail"
          type="email"
          placeholder="Work email"
          value={formData.workEmail}
          onChange={handleInputChange}
          required
          className="
            h-9 lg:h-10
            text-[13px] lg:text-sm
            bg-slate-800/50 border-slate-700/50
            text-slate-100 placeholder:text-slate-500
            focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20
            rounded-md
          "
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-1.5 lg:space-y-2">
        <Label className="text-[12.5px] lg:text-sm font-semibold text-slate-100 tracking-tight">
          Phone number <span className="text-red-400">*</span>
        </Label>
        <Input
          name="phone"
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="
            h-9 lg:h-10
            text-[13px] lg:text-sm
            bg-slate-800/50 border-slate-700/50
            text-slate-100 placeholder:text-slate-500
            focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20
            rounded-md
          "
        />
      </div>

      {/* Company Size + Timeline */}
      <div className="grid grid-cols-2 gap-3 lg:gap-4">
        <div className="space-y-1.5 lg:space-y-2 min-w-0">
          <Label className="text-[12.5px] lg:text-sm font-semibold text-slate-100 tracking-tight">
            Company size <span className="text-red-400">*</span>
          </Label>
          <DarkSelect
            value={formData.companySize}
            onChange={(value) => handleSelectChange('companySize', value)}
            placeholder="Company size"
            options={[
              { label: "1-10 employees", value: "1-10" },
              { label: "11-50 employees", value: "11-50" },
              { label: "51-200 employees", value: "51-200" },
              { label: "201-500 employees", value: "201-500" },
              { label: "501+ employees", value: "501+" },
            ]}
          />
        </div>

        <div className="space-y-1.5 lg:space-y-2 min-w-0">
          <Label className="text-[11px] lg:text-sm font-semibold text-slate-100 leading-tight tracking-tight block">
            When do you want to roll out?
          </Label>
          <DarkSelect
            value={formData.timeline}
            onChange={(value) => handleSelectChange('timeline', value)}
            placeholder="Select"
            options={[
              { label: "Immediately", value: "immediately" },
              { label: "In 1-3 months", value: "1-3-months" },
              { label: "In 3-6 months", value: "3-6-months" },
              { label: "In 6-12 months", value: "6-12-months" },
              { label: "Not sure yet", value: "not-sure" },
            ]}
          />
        </div>
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-2.5 lg:gap-3">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-3.5 w-3.5 lg:h-4 lg:w-4 flex-shrink-0 rounded border-slate-600 bg-slate-800 text-[#e2472b] focus:ring-[#e2472b]"
        />
        <p className="text-[12px] lg:text-sm text-slate-400 leading-relaxed">
          By submitting this form, you consent to the processing of your data in accordance with our Privacy Policy.
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full
          bg-[#e2472b] hover:bg-[#e2472b]
          text-white font-semibold
          text-[14px] lg:text-base
          h-10 lg:h-11
          rounded-lg
          transition-all duration-200
          shadow-md hover:shadow-lg hover:shadow-[#e2472b]/30
          disabled:opacity-70
        "
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block w-3.5 h-3.5 lg:w-4 lg:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="text-[13.5px] lg:text-sm">Scheduling...</span>
          </span>
        ) : (
          'Schedule  Demo'
        )}
      </Button>

      {mounted && (
        <PopupModal
          url={calendlyUrl || ""}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={document.body}
        />
      )}
    </form>
  );
}