const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HR API');
    }
    catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/empcount', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/countryCount', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM countries');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/deptcount', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM departments');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/locationcount', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM locations');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/regioncount', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM regions');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/jobscount', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM jobs');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/jobHcount', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM job_history');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

// app.get('/Q40', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             SELECT e.first_name, e.last_name, l.city, l.postal_code, c.country_name
//             FROM employees e
//             LEFT JOIN departments d ON e.department_id = d.department_id
//             LEFT JOIN locations l ON d.location_id = l.location_id
//             LEFT JOIN countries c ON l.country_id = c.country_id
//             LIMIT 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q41', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select jh.job_id, jh.start_date, jh.end_date, e.first_name, e.last_name,
//              e.salary from job_history jh join employees e
//             on jh.employee_id = e.employee_id limit 5;

//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q42', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, jh.end_date 
//             from employees e join job_history jh on e.employee_id = jh.employee_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q43', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, jh.end_date, 
//             d.department_name from employees e join job_history jh on e.employee_id = 
//             jh.employee_id join departments d on jh.department_id = d.department_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q44', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, d.department_name, l.city,
//             l.postal_code from employees e join job_history jh on e.employee_id = jh.employee_id join 
//             departments d on jh.department_id = d.department_id join locations l on d.location_id = l.location_id limit 5;

//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q45', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, c.country_name 
//             from employees e join job_history jh on e.employee_id = jh.employee_id join 
//             departments d on jh.department_id = d.department_id join locations l on d.location_id 
//             = l.location_id join countries c on l.country_id = c.country_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q46', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select jh.job_id, jh.start_date, e.first_name, e.last_name, e.salary, 
//             d.department_name from job_history jh join employees e  on jh.employee_id
//              = e.employee_id join departments d on e.department_id = d.department_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q47', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary,
//             j.job_id, j.job_title from job_history jh join employees e  on jh.employee_id
//             = e.employee_id join jobs j on e.job_id = j.job_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q48', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary, 
//             j.job_id, j.job_title, d.department_name from jobs j join job_history 
//             jh on j.job_id = jh.job_id join employees e on jh.employee_id = e.employee_id
//             join departments d on e.department_id = d.department_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q49', async (req, res) => {
//     try {
//         const result = await pool.query(`
//            Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary,
//            d.department_name, l.city, l.postal_code from job_history jh join 
//            employees e on jh.employee_id = e.employee_id join departments d on
//            e.department_id = d.department_id join locations l on d.location_id = 
//            l.location_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q50', async (req, res) => {
//     try {
//         const result = await pool.query(`
//            Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary, 
//            d.department_name, c.country_name from job_history jh join employees 
//            e on jh.employee_id = e.employee_id join departments d on e.department_id 
//            = d.department_id join locations l on d.location_id = l.location_id join countries
//            c on l.country_id = c.country_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });


// app.get('/Q51', async (req, res) => {
//     try {
//         const result = await pool.query(`
//           Select r.region_id, r.region_name, c.country_name, l.city, l.postal_code from locations l join countries c
//           on l.country_id = c.country_id join regions r on c.region_id = r.region_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q52', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select c.country_name, r.region_name, l.city from countries c
//         join regions r on c.region_id = r.region_id join locations l on 
//         c.country_id = l.country_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q53', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select l.city, c.country_name, r.region_name from locations 
//         l join countries c on l.country_id = c.country_id join regions 
//         r on c.region_id = r.region_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q54', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select d.department_name, e.first_name, e.last_name, l.city from 
//         departments d join employees e on d.department_id = e.department_id
//         join locations l on d.location_id = l.location_id limit 5;

//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q55', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select e.first_name, e.last_name, d.department_name, l.city, c.country_name
//         from employees e join departments d on e.department_id = d.department_id
//         join locations l on d.location_id = l.location_id join countries c on l.country_id 
//         = c.country_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q56', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select e.first_name, e.last_name, m.first_name as manager_first, m.last_name 
//         as manager_last, d.department_name, l.city from employees e left join employees 
//         m on e.manager_id = m.employee_id join departments d on e.department_id =
//         d.department_id join locations l on d.location_id = l.location_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q57', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select e.first_name, e.last_name, j.job_title, d.department_name, l.city
//         from employees e join jobs j on e.job_id = j.job_id join departments d 
//         on e.department_id = d.department_id join locations l on d.location_id 
//         = l.location_id limit 5;

//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q58', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select e.first_name, e.last_name, j.job_title, d.department_name,
//         m.first_name as manager_first, m.last_name as manager_last from
//         employees e join jobs j on e.job_id = j.job_id join departments d 
//         on e.department_id = d.department_id left join employees m on 
//         e.manager_id = m.employee_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q59', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select e.first_name, e.last_name, j.job_title, d.department_name,
//         m.first_name as manager_first, m.last_name as manager_last,
//         l.city from employees e join jobs j on e.job_id = j.job_id
//         join departments d on e.department_id = d.department_id
//         join locations l on d.location_id = l.location_id left join employees 
//         m on e.manager_id = m.employee_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });


// app.get('/Q60', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         select country_name from countries where region_id = 1 limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q61', async (req, res) => {
//     try {
//         const result = await pool.query(`
//         Select d.department_id, d.department_name, l.city from departments d join
//         locations l on d.location_id = l.location_id where l.city like 'N%' limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q62', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             SELECT e.first_name, e.last_name, e.salary, d.department_name, 
//             e.commission_pct FROM employees e JOIN departments d ON 
//             e.department_id = d.department_id JOIN employees em ON 
//             d.manager_id = em.manager_id WHERE e.commission_pct > 0.15 
//             LIMIT 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q63', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select distinct j.job_title, e.first_name, e.last_name from employees e
//             join jobs j on e.job_id = j.job_id where e.employee_id in (
//             select distinct manager_id from employees where manager_id is not null
//             ) limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q64', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select l.postal_code, c.country_name, r.region_name
//             from locations l join countries c on l.country_id = 
//             c.country_id join regions r on c.region_id = r.region_id
//             where r.region_name = 'asia' limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q65', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select d.department_name, e.first_name, e.commission_pct from departments d join 
//             employees e on d.department_id = e.department_id where commission_pct < (Select avg
//             (commission_pct) as avg_com from employees where commission_pct is not null) limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q66', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select e.first_name, e.last_name, e.salary, j.job_title  from employees e 
//             join jobs j on e.job_id = j.job_id where e.salary > (select avg(e2.salary) 
//             from employees e2 where e2.department_id = e.department_id) limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q67', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select employee_id from employees
//             where department_id is null;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q68', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select e.first_name, e.last_name from employees e
//             where exists ( select 1 from job_history jh where
//             jh.employee_id = e.employee_id group by jh.employee_id
//             having count(*) > 1) limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q69', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             Select department_id, count(department_id) as dept_count from 
//             employees group by department_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q70', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select j.job_id, j.job_title, sum(e.salary) as total_salary 
//             from jobs j join employees e on j.job_id = e.job_id 
//             group by j.job_id, j.job_title limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q71', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select d.department_id, d.department_name, avg
//             (e.commission_pct) as avg_commission from departments 
//             d join employees e on d.department_id = e.department_id 
//             group by d.department_id, d.department_name limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q72', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select c.country_id, max(e.salary) as max_salary from employees e
//             join departments d on e.department_id = d.department_id join 
//             locations l on d.location_id = l.location_id join countries c on
//             l.country_id = c.country_id group by c.country_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q72b', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select e.first_name, e.last_name, d.department_name, l.city, l.state_province
//             from employees e join departments d on e.department_id = d.department_id
//             join locations l on d.location_id = l.location_id where lower(e.first_name) 
//             like '%z%' limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });


// app.get('/Q73', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select j.job_title, d.department_name, concat(e.first_name , ' ' , e.last_name)
//             as full_name, jh.start_date from job_history jh join employees e on jh.employee_id 
//             = e.employee_id join jobs j on jh.job_id = j.job_id join departments d on jh.department_id
//             = d.department_id where jh.start_date >= '1993-01-01' and jh.end_date <= '1997-08-31'
//             Limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q74', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select c.country_name, l.city, count(d.department_id) as department_count
//             from employees e join departments d on e.department_id = d.department_id
//             join locations l on d.location_id = l.location_id join countries c on l.country_id
//             = c.country_id group by c.country_name, l.city having count(e.employee_id) 
//             >= 2 limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q75', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select concat(e.first_name, ' ' ,e.last_name )as full_name, j.job_title,
//             jh.start_date, jh.end_date from employees e join job_history jh on  
//             e.employee_id = jh.employee_id join jobs j on jh.job_id = j.job_id
//             where e.commission_pct is null and jh.end_date = (select max
//             (jh2.end_date) from job_history jh2 where jh2.employee_id = 
//             e.employee_id) limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q76', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select concat(e.first_name, ' ', e.last_name) as full_name,
//             c.country_id, c.country_name from employees e join departments 
//             d on e.department_id = d.department_id join locations l on 
//             d.location_id = l.location_id join countries c on l.country_id
//             = c.country_id limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q77', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select concat(e.first_name, ' ', e.last_name) as full_name, e.salary, 
//             e.department_id from employees e where e.salary in (select min
//             (e2.salary) from employees e2 group by e2.department_id) limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q78', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select * from employees where salary = ( select distinct salary
//             from employees order by salary desc offset 2 rows fetch next
//             1 row only );
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q79', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select e.employee_id, concat(e.first_name,' ' ,e.last_name) as 
//             full_name, e.salary from employees e where salary > (select 
//             avg(salary) from employees) and department_id in ( select 
//             department_id from employees where first_name like '%J%' 
//             or last_name like '%J%') limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

// app.get('/Q80', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             select concat(e.first_name, ' ', e.last_name) as full_name, e.employee_id,
//             j.job_title, l.city from jobs j join employees e on j.job_id = e.job_id 
//             join departments d on e.department_id = d.department_id join locations 
//             l on d.location_id = l.location_id where l.city = 'toronto' limit 5;
//         `);
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ Error: err.message });
//     }
// });

app.get('/countries', async (req, res) => {
    try {
        const result = await pool.query(`
            select * from countries;
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/employees',async(req,res)=>{
    try{
        const result = await pool.query('Select * from employees');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`connected Successfully ${port}`);
});

