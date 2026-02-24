'use client';

import { useState, FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DemoFormProps {
  className?: string;
}

export function DemoForm({ className }: DemoFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    companySize: '',
    timeline: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);

      setFormData({
        firstName: '',
        lastName: '',
        workEmail: '',
        phone: '',
        companySize: '',
        timeline: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-slate-100">
            First name <span className="text-red-400">*</span>
          </Label>
          <Input
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="bg-slate-800/50 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-semibold text-slate-100">
            Last name <span className="text-red-400">*</span>
          </Label>
          <Input
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="bg-slate-800/50 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20"
          />
        </div>
      </div>

      {/* Work Email */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold text-slate-100">
          Work email <span className="text-red-400">*</span>
        </Label>
        <Input
          name="workEmail"
          type="email"
          placeholder="Work email"
          value={formData.workEmail}
          onChange={handleInputChange}
          required
          className="bg-slate-800/50 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold text-slate-100">
          Phone number <span className="text-red-400">*</span>
        </Label>
        <Input
          name="phone"
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="bg-slate-800/50 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20"
        />
      </div>

      {/* Company Size */}
      <div className='grid grid-cols-2 gap-4'>
 <div className="space-y-2">
        <Label className="text-sm font-semibold text-slate-100">
          Company size <span className="text-red-400">*</span>
        </Label>
        <Select
          value={formData.companySize}
          onValueChange={(value) => handleSelectChange('companySize', value)}
        >
          <SelectTrigger className="bg-slate-800/50 border-slate-700/50 text-slate-400 focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20">
            <SelectValue placeholder="Company size" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700">
            <SelectItem value="1-10">1-10 employees</SelectItem>
            <SelectItem value="11-50">11-50 employees</SelectItem>
            <SelectItem value="51-200">51-200 employees</SelectItem>
            <SelectItem value="201-500">201-500 employees</SelectItem>
            <SelectItem value="501+">501+ employees</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold text-slate-100">
          When do you want to roll out ? <span className="text-red-400">*</span>
        </Label>
        <Select
          value={formData.timeline}
          onValueChange={(value) => handleSelectChange('timeline', value)}
        >
          <SelectTrigger className="bg-slate-800/50 border-slate-700/50 text-slate-400 focus:border-[#e2472b]/60 focus:ring-[#e2472b]/20">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700">
            <SelectItem value="immediately">Immediately</SelectItem>
            <SelectItem value="1-3-months">In 1-3 months</SelectItem>
            <SelectItem value="3-6-months">In 3-6 months</SelectItem>
            <SelectItem value="6-12-months">In 6-12 months</SelectItem>
            <SelectItem value="not-sure">Not sure yet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      </div>
     
      {/* Privacy Text */}
      <p className="text-sm text-slate-400 leading-relaxed">
        By submitting this form, you consent to the processing of your data in accordance with our Privacy Policy.
      </p>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#e2472b] hover:bg-[#e2472b] text-white font-semibold text-base py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-[#e2472b]/30 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Scheduling...
          </span>
        ) : (
          'Get free demo'
        )}
      </Button>
    </form>
  );
}