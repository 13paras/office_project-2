/* eslint-disable react/prop-types */
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { PlusCircleIcon, PlusIcon } from "lucide-react";

const CustomAccordion = ({ id, title, description, points, point }) => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const styles = {
    title: "text-4xl text-greenishBlue",
    content: "list-disc space-y-2 pt-2",
  };

  return (
    <Accordion showDivider={true} itemClasses={styles}>
      <AccordionItem
        key={id}
        aria-label={"Accordion " + id}
        title={
          <h1>
            <span className='text-[#057bc4]'>{id > 9 ? id : `0${id}`}. </span>{" "}
            {title}
          </h1>
        }
        subtitle={
          <p className='py-2 font-medium text-zinc-500'>
            {description || null}
          </p>
        }
        indicator={<PlusCircleIcon className='text-white' fill='' size={50} />}
        classNames={"border "}
        className='border border-b-[1px] border-b-zinc-300 text-lg'
      >
        <ul className='ml-4 list-disc space-y-2 pb-4 text-zinc-500'>
          {point}
          {points &&
            points.map((point, index) => (
              <li key={index} className='ml-4 list-disc'>
                {point}
              </li>
            ))}
        </ul>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
