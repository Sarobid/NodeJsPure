
select company.company_code,founder,l.nbre_l,l.nbre_s,l.nbre_m,l.nbre_e from
company join (
select company_code,COUNT(*) AS nbre_l,SUM(nbre_s) AS nbre_s, SUM(nbre_m) as nbre_m,nbre_e as nbre_e from
(

select lead_manager_code,company_code,COUNT(*) as nbre_s,SUM(nbre_m) as nbre_m,nbre_e
from 
(

select senior_manager_code,lead_manager_code,company_code,COUNT(*) as nbre_m ,SUM(nbre_e) as nbre_e
from (

select manager_code,senior_manager_code,lead_manager_code,company_code,COUNT(manager_code) AS nbre_e from employee 
group by manager_code,senior_manager_code,lead_manager_code,company_code)

 group by senior_manager_code,lead_manager_code,company_code )

group by lead_manager_code,company_code,nbre_e)

 group by company_code,nbre) l
on l.company_code=company.company_code
order by company_code asc;