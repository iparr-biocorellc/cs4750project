'use client';

import { Label } from '@/app/lib/definitions';
import {
  CurrencyDollarIcon,
  CalendarIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  HashtagIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateLabel } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditLabelForm({
  order_number,
  tracking_number,
  label,
}: {
  order_number: string;
  tracking_number: string;
  label: Label;

}) {
  const initialState = { message: null, errors: {} };
  const updateLabelWithID = updateLabel.bind(null, tracking_number, order_number);
  const [state, dispatch] = useFormState(updateLabelWithID, initialState);
  return (
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Tracking Number */}
          <div className="mb-4">
            <label htmlFor="tracking-number" className="mb-2 block text-sm font-medium">
              Tracking Number
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="tracking-number"
                    name="tracking_number"
                    type="text"
                    placeholder="Enter Tracking Number"
                    defaultValue={label.tracking_number}
                    disabled={true}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <HashtagIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
              <div id="tracking-number-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.tracking_number &&
                    state.errors.tracking_number.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                    ))}
              </div>
            </div>
          </div>

          {/* Shipping Service */}
          <div className="mb-4">
            <label htmlFor="shipping-service" className="mb-2 block text-sm font-medium">
              Shipping Service
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="shipping-service"
                    name="shipping_service"
                    type="text"
                    placeholder="Enter Shipping Service"
                    defaultValue={label.shipping_service}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <TruckIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
              <div id="shipping-service-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.shipping_service &&
                    state.errors.shipping_service.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                    ))}
              </div>
            </div>
          </div>

          {/* Cost */}
          <div className="mb-4">
            <label htmlFor="cost" className="mb-2 block text-sm font-medium">
              Cost
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="cost"
                    name="cost"
                    type="number"
                    step="0.01"
                    placeholder="Enter Cost"
                    defaultValue={label.cost}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <CurrencyDollarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
              <div id="cost-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.cost &&
                    state.errors.cost.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                    ))}
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label htmlFor="date" className="mb-2 block text-sm font-medium">
              Date
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="date"
                    name="date"
                    type="date"
                    defaultValue={label.date ? new Date(label.date).toISOString().split('T')[0] : ''}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <CalendarIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
              <div id="date-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.date &&
                    state.errors.date.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                    ))}
              </div>
            </div>
          </div>

          {/* Buyer Username */}
          <div className="mb-4">
            <label htmlFor="buyer-username" className="mb-2 block text-sm font-medium">
              Buyer Username
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                    id="buyer-username"
                    name="buyer_username"
                    type="text"
                    placeholder="Enter Buyer Username"
                    defaultValue={label.buyer_username}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <UserIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
              <div id="buyer-username-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.buyer_username &&
                    state.errors.buyer_username.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                    ))}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label htmlFor="notes" className="mb-2 block text-sm font-medium">
              Notes
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
          <textarea
              id="notes"
              name="notes"
              placeholder="Enter any additional notes"
                defaultValue={label.notes}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          ></textarea>
                <ClipboardDocumentListIcon
                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
              <div id="notes-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.notes &&
                    state.errors.notes.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                    ))}
              </div>
            </div>
          </div>


                  <div aria-live="polite" aria-atomic="true">
                    {state.message && (
                        <p className="mt-2 text-sm text-red-500" key={state.message}>
                          {state.message}
                        </p>
                    )}
                  </div>

                  <div className="mt-6 flex justify-end gap-4">
                    <Link
                      href={`/dashboard/sales/${order_number}/labels`}
                      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                      Cancel
                    </Link>
            <Button type="submit">Edit Label</Button>
          </div>
        </div>
      </form>

  );
}
