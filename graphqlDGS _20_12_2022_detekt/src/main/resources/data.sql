
-------------------
-------------------
-- DATASERVICE
-------------------
-------------------
INSERT INTO "resource" ("id", "title","tipo") VALUES ('dSer1','dServTit1','data_service');
INSERT INTO "dataservice" ("id") VALUES ('dSer1');
INSERT INTO "resource" ("id", "title","tipo") VALUES ('dSer2','dServTit2','data_service');
INSERT INTO "dataservice" ("id") VALUES ('dSer2');

-------------------
-------------------
-- CATALOG
-------------------
-------------------

INSERT INTO "resource" ("id", "title","tipo","dataset_service_id") VALUES ('catalog1','catalogTit1','catalog','dSer1');
INSERT INTO "catalog" ("catalog_id") VALUES ('catalog1');
INSERT INTO "resource" ("id", "title","tipo") VALUES ('catalog2','catalogTit2','catalog');
INSERT INTO "catalog" ("catalog_id") VALUES ('catalog2');
INSERT INTO "resource" ("id", "title","tipo") VALUES ('catalog3','catalogTit3','catalog');
INSERT INTO "catalog" ("catalog_id") VALUES ('catalog3');

-------------------
-------------------
-- DISTRIBUTIONS
-------------------
-------------------

INSERT INTO "distribution" ("id", "title") VALUES ('Dist1','DistTit1');
INSERT INTO "distribution" ("id", "title") VALUES ('Dist2','DistTit2');
INSERT INTO "distribution" ("id", "title") VALUES ('Dist3','DistTit3');
INSERT INTO "distribution" ("id", "title") VALUES ('Dist4','DistTit4');

-- AccessService
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist1','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist2','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist3','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist4','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist2','dSer2');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist3','dSer2');

-------------------
-------------------
-- DATASET SERIES
-------------------
-------------------

INSERT INTO "resource" ("id", "title","tipo","dataset_service_id") VALUES ('dS1','dSTit1','dataset_series','dSer1');
INSERT INTO "datasetseries" ("dataset_series_id") VALUES ('dS1');
INSERT INTO "resource" ("id", "title","tipo") VALUES ('dS2','dSTit2','dataset_series');
INSERT INTO "datasetseries" ("dataset_series_id") VALUES ('dS2');

-------------------
-------------------
-- DATASET
-------------------
-------------------

INSERT INTO "resource" ("id", "title","tipo","dataset_service_id") VALUES ('d1','dTit1','dataset','dSer1');
INSERT INTO "dataset" ("dataset_id") VALUES ('d1');
INSERT INTO "resource" ("id", "title","tipo") VALUES ('d2','dTit2','dataset');
INSERT INTO "dataset" ("dataset_id") VALUES ('d2');

--InSeries

INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('d1','dS1');
INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('d1','dS2');
INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('d2','dS1');
INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('d2','dS2');

--Distributions
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist1');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist2');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist3');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist4');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d2','Dist1');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d2','Dist3');

-------------------
-------------------
-- RELATIONSHIPS
-------------------
-------------------
INSERT INTO "relationships" ("id_source", "id_target", "target_type") VALUES ('catalog1', 'dS1', 'DatasetSeries');
INSERT INTO "relationships" ("id_source", "id_target", "target_type") VALUES ('catalog1', 'dSer1', 'DataService');
INSERT INTO "relationships" ("id_source", "id_target", "target_type") VALUES ('catalog1', 'd1', 'Dataset');
INSERT INTO "relationships" ("id_source", "id_target", "target_type") VALUES ('catalog1', 'catalog1', 'Catalog');

------------------
-------------------
-- CATALOG RECORD
-------------------
-------------------

INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR1','cRTit1','catalog1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR2','cRTit2','catalog1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR3','cRTit3','d1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR4','cRTit4','dS1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR5','cRTit5','catalog2');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR6','cRTit6','catalog3');

-------------------
-------------------
-- CATALOGINRECORD
-------------------
-------------------
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR1', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR2', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR3', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR4', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR5', 'catalog2');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR6', 'catalog3');










--INSERT INTO "distribution" ("id", "title") VALUES ('Dist1','DistTit1');
--INSERT INTO "distribution" ("id", "title") VALUES ('Dist2','DistTit2');
--INSERT INTO "distribution" ("id", "title") VALUES ('Dist3','DistTit3');
--INSERT INTO "distribution" ("id", "title") VALUES ('Dist4','DistTit4');

--INSERT INTO "distribution" ("id", "title", "idDataset") VALUES ('Dist5','DistTit5', 'd1');
--INSERT INTO "distribution" ("id", "title", "idDatasetSeries") VALUES ('Dist6','DistTit6', 'dS1');

