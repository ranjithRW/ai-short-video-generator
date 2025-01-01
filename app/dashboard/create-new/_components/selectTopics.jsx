"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


function SelectTopics({onUserSelect}) {
  const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Historical Facts', 'BEd Time Story', 'Motivational']
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <div>
        <h2 className='font-bold text-2xl text-primary'>Select Topics</h2>
        <p className='text-sm text-muted-foreground'>Select a topic to generate a video</p>
        <Select onValueChange={(value) => {
          setSelectedOption(value)
          value != "Custom Prompt" && onUserSelect('topic', value)
        }}>
          <SelectTrigger className="w-full mt-2 p-6 tect-lg">
            <SelectValue placeholder="Content type" />
          </SelectTrigger>
          <SelectContent>
            {options.map((item, index) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedOption == "Custom Prompt" &&
          <Textarea className="mt-3 " 
          onChange={(e) => onUserSelect('prompt', e.target.value)}
          placeholder="write your Prompt" />
        }
      </div>
    </div>
  )
}

export default SelectTopics