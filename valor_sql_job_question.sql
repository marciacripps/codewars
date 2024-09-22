--https://www.db-fiddle.com/f/7JfzpGSHqUjHRNgn6aeQqF/0
/*
Data Schema:

LOANS
+--------------------------+
| loan_id        | string  |<-------+
| transfer_date  | date    |        |
| loan_type      | string  |        |
+--------------------------+        |
                                    |    CALLS
                                    |    +--------------------------------+
                                    |    | call_id             | string   |
                                    |    | created_at          | datetime |
                                    |    | duration_in_seconds | int      |
                                    +--->| loan_id             | string   |
                                         +--------------------------------+

Questions:
1. Which loan type had the most calls in January 2023?
2. How many calls did this loan type have in January 2023?
*/

-- Type your query below


-- select loan_type, count(*) as type_count
-- from loans
-- group by loan_type

select l.loan_type, count(c.call_id) as call_count
from loans l
join calls c on l.loan_id = c.loan_id
where c.created_at >= '2023-01-01' and c.created_at < '2023-02-01'
group by l.loan_type
order by call_count desc 
