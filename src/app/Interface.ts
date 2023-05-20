export interface Table_Data {
  id:              number;
  employee_name:   string;
  employee_salary: number;
  employee_age:    number;
  profile_image:   string;
}

export interface Data{
  status:  string;
  data:    Table_Data[];
  message: string;
}


