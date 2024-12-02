import { useState } from 'react';
import { Option } from '../../types/common';
import Select from '../Select';


const languages: Option[] = [
  { id: 'en', name: 'English' },
  { id: 'sl', name: 'Sinhala' },
];
const currencies: Option[] = [
  { id: 'LKR', name: 'LKR' },
  { id: 'USD', name: 'USD' },
];
/* -------------------------------------------------------------------------- */
/*                                 component                                  */
/* -------------------------------------------------------------------------- */
export default function Header() {
  const [language, setLanguage] = useState<Option>(languages[0]);
  const [currency, setCurrency] = useState<Option>(currencies[0]);

  return (
    <div className="bg-primary-dark">
      <div className="max-w-screen-xl mx-auto w-full flex items-center px-4 py-2">
        <div className="flex gap-5 items-center">
          <Select options={languages} onSelect={setLanguage} select={language} />
          <Select options={currencies} onSelect={setCurrency} select={currency} />
        </div>
        <div className="flex-grow"></div>
        <div className="flex gap-5 items-center">
          <div className="text-typography-light hover:text-secondary-light cursor-pointer">Contact</div>
          <div className="text-typography-light hover:text-secondary-light cursor-pointer">About</div>
        
        </div>
      </div>
    </div>
  );
}
