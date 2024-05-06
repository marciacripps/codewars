-- <!-- https://www.codewars.com/kata/663cb31a7f2daae93afac3ad
-- In celebration of ABC Kata Solutions' anniversary, we focus on the pillars of an organization: longest-serving and currently active employees. This SQL challenge involves uncovering a hidden code derived from the first letters of the names of the top 5 longest-tenured employees who are still actively contributing to ABC Kata Solutions.

-- Craft an SQL query to discover a hidden code by summing the ASCII values of the first letters of the last names of the top five oldest (longest-tenured) employees who are still actively contributing to ABC Kata Solutions.

-- You have access to an employees table in ABC Kata Solutions'database, which includes:

-- id (integer) - Unique identifier for each employee.
-- name (string) - Full name of the employee, formatted as "firstName lastName".
-- joined_date (date) - The date the employee began their employment with ABC Kata Solutions.
-- left_date (date, nullable) - The date the employee ended their employment with ABC Kata Solutions, if applicable.
-- Requirements:

-- Identify the Top 5 Oldest Current Employees: Find the five employees with the longest tenure at ABC Kata Solutions who are still employed (i.e., their left_date is NULL).
-- Extract the First Letter of the Last Name: From each employee's name, extract the first letter of the last name.
-- Calculate ASCII Values: Convert these letters to their ASCII values.
-- Sum the Values: Sum the ASCII values to derive the hidden code.
-- Present the Result: Display the final sum as hidden_code.
-- Notes:
-- Let's assume for this task that there are no employees with the same joined_date - tests are written to ensure that no two employees have the same date of join.
-- For this sample data:

-- | id | name             | joined_date | left_date  |
-- +----+------------------+-------------+------------+
-- | 1  | Bob Anderson     | 2015-04-23  | NULL       |
-- | 2  | Alice Brown      | 2016-05-20  | NULL       |
-- | 3  | David Chapman    | 2017-06-15  | NULL       |
-- | 4  | Charlie Dinklage | 2014-07-30  | NULL       |
-- | 5  | Frank Evans      | 2015-08-25  | NULL       |
-- | 6  | Eve Fitch        | 2014-06-11  | 2019-10-01 |
-- | 7  | Hannah Grimes    | 2014-12-03  | 2020-03-15 |
-- | 8  | Grace Hart       | 2018-01-20  | NULL       |
-- | 9  | Julia Ingram     | 2019-03-17  | NULL       |
-- | 10 | Ian James        | 2020-04-15  | NULL       |
-- | 11 | Luna Knox        | 2021-05-22  | NULL       |
-- | 12 | Karl Lovegood    | 2022-06-30  | NULL       |
-- | 13 | Milo Murphy      | 2023-07-05  | NULL       |
-- the desired output is the following:

-- hidden_code
-- 335
-- From the sorted list of those employees who still working at ABC Kata Solutions, the top 5 oldest employees based on their join dates are:

-- Charlie Dinklage (2014-07-30)
-- Bob Anderson (2015-04-23)
-- Frank Evans (2015-08-25)
-- Alice Brown (2016-05-20)
-- David Chapman (2017-06-15)
-- We extract the first letter of each of their last names, and sum the ASCII values of these letters:

-- hidden_code = 68 (D) + 65 (A) + 69 (E) + 66 (B) + 67 (C) = 335

-- GLHF! -->

select sum(c) as hidden_code
from(
    select ascii(left(split_part(name,' ', 2),1) ) as ascii_value as c 
    from employees
    where left_date is null
    order by joined_date 
    limit 5) 
    t





select split_part(name,' ',2) as last_name
from employees
where left_date is null
order by joined_date 
limit 5


select * from employees 
-- get employees still employed
select * from employees 
where left_date is null 
--get employees still employed order joine_date
select * from employees
where left_date is null
order by joined_date 
--limit this to 5
select * from employees
where left_date is null
order by joined_date 
limit 5

-- Since the name column is in the format "firstName lastName", 
-- get last_name by itself 
--The split_part(name, ' ', 2) function extracts the second part of the name (i.e., the last name), 
--assuming the format is "firstName lastName".
select split_part(name, ' ', 2) as last_name
from employees
where left_date is null
order by joined_date
limit 5

--Now that you have the last name, you need to get the first letter of that last name. 
--getting the first letter of the last_name 
--You can use the LEFT() function for this:
select left(split_part(name, ' ', 2),1) as first_letter_of_last_name
from employees
where left_date is null 
order by joined_date
limit 5 

--You can now use the ASCII() function to convert the first letter into its ASCII value:
-- ascii_value is just numbers 
select ascii(left(split_part(name,' ',2),1)) as ascii_value 
from employees
where left_date is null
order by joined_date
limit 5 

--Finally, you need to sum the ASCII values to get the hidden code. 

select sum(c) as hidden_code
from (
  select ascii(split_part(name, ' ', 2)) as c
  from employees 
  where left_date is null
  order by joined_date 
  limit 5)
t


--mcc
--mcc 2024-05-04
--mcc 2024-05-06
