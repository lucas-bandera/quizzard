import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectLabel,
    SelectGroup,
    SelectValue,
  } from "@/components/ui/select"

export const SubjectSelect = ({handleValueChange})=> {
    
    return (
        <Select onValueChange={e => handleValueChange(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Subjects</SelectLabel>
            <SelectItem value="react" selected>React.js</SelectItem>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="behavioral">Behavioral</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}