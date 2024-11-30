export type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

export type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

export type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

export type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

export type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

export type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

export type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

export type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

export type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

export type ResultColumn = {
  header: string;
  accessor: string;
  className?: string;
};

export type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

export type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};
