import type { SelectWithOptions } from "@/features/header/types/navigation.type";

interface Props {
  navigation: SelectWithOptions[];
}

export const Navigation = ({ navigation }: Props) => {
  return (
    <nav>
      <ul className="flex gap-2 md:gap-8 items-center text-gray-600 text-small font-medium">
        {navigation.map(({ id, name, options }) => (
          <li key={id}>
            <select
              className="focus:outline-none hover:text-primary transition-colors duration-200 cursor-pointer"
              defaultValue={name}
            >
              {options.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </li>
        ))}
        <li>
          <button className="hidden md:block hover:text-primary">
            About Us
          </button>
        </li>
        <li>
          <button className="hidden md:block hover:text-primary">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};
