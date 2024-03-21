import { Select } from "@/features/components/select/select";
import type { SelectWithOption } from "@/features/header/types/navigation.type";

interface Props {
  navigation: SelectWithOption[];
}

export const Navigation = ({ navigation }: Props) => {
  return (
    <nav>
      <ul className="flex gap-2 md:gap-8 items-center text-gray-600 text-small font-medium">
        {navigation.map(({ id, name }) => (
          <li key={id}>
            <Select
              textSize="small"
              textWeight="medium"
              textColor="gray-600"
              option={name}
            />
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
