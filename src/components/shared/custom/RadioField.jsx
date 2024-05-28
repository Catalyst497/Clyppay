import { RadioGroup, RadioGroupItem } from '@/components/shared/shadcn/radio';


export default function RadioField(){
    return(
<RadioGroup>
      <RadioGroupItem
        imageSrc="/path-to-image1.jpg"
        label="Option 1"
        value="option1"
      />
      <RadioGroupItem
        imageSrc="/path-to-image2.jpg"
        label="Option 2"
        value="option2"
      />
    </RadioGroup>


    )
}