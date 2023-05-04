---------------------
---------------------
---- DATOS DE INICIALIZACION
---------------------
---------------------

INSERT INTO "resource" ("id","tipo","issued","modified") VALUES ('root','catalog','2023-02-07T18:00:00', '2023-02-07T18:01:00');

---------------------
---------------------
---- DATOS DE PRUEBA
---------------------
---------------------

--
---------------------
---------------------
---- DATASERVICE
---------------------
---------------------
INSERT INTO "resource" ("id","tipo","issued","modified") VALUES ('dSer1','data_service','2012-02-21T18:10:00', '2012-01-01T00:00:00');
INSERT INTO "resource" ("id","tipo","issued","modified") VALUES ('dSer2','data_service','2012-02-21T18:10:00', '2012-01-01T00:00:00');



---------------------
---------------------
---- CATALOG
---------------------
---------------------
--
INSERT INTO "resource" ("id","tipo","issued","modified") VALUES ('catalog1','catalog','2012-02-21T18:10:00', '2012-01-01T00:00:00');
INSERT INTO "resource" ("id","tipo","issued","modified") VALUES ('catalog2','catalog','2012-02-21T18:10:00', '2012-01-01T00:00:00');



---------------------
---------------------
---- DISTRIBUTIONS
---------------------
---------------------
--
INSERT INTO "distribution" ("id","byte_size","format") VALUES ('Dist1',0,'application/json');
INSERT INTO "distribution" ("id","byte_size","format") VALUES ('Dist2',0,'application/davmount+xml');
INSERT INTO "distribution" ("id","byte_size","format") VALUES ('Dist3',0,'application/mathematica');
INSERT INTO "distribution" ("id","byte_size","format") VALUES ('Dist4',0,'application/epub+zip');
INSERT INTO "distribution" ("id","byte_size","format") VALUES ('Dist5',0,'text/mathml');
INSERT INTO "distribution" ("id","byte_size","format") VALUES ('Dist6',0,'application/ogg');

---------------------
---------------------
---- AccessService
---------------------
---------------------

INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist1','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist2','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist3','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist4','dSer1');


---------------------
---------------------
---- DATASET SERIES
---------------------
---------------------
--
INSERT INTO "resource" ("id","tipo","issued","modified") VALUES ('dS1','dataset_series','2012-02-21T18:10:00', '2012-01-01T00:00:00');


---------------------
---------------------
---- DATASET
---------------------
---------------------
--
INSERT INTO "resource" ("id","tipo","issued","modified","accrual_periodicity","temporal_coverage_start","temporal_coverage_end") VALUES ('d1','dataset','2012-02-21T18:10:00', '2012-01-01T00:00:00','time:days 1.0','2020-12-31T00:00:00+01:00','2020-01-01T00:00:00+01:00');



---------------------
---------------------
---- ServesDataset
---------------------
---------------------
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','d1');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','dS1');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','catalog1');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','catalog2');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer2','catalog2');

---------------------
---------------------
----InSeries
---------------------
---------------------
INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('d1','dS1');

---------------------
---------------------
--Distributions
---------------------
---------------------

INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist1');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist2');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist3');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist4');



---------------------
---------------------
---- RELATIONSHIPS
---------------------
---------------------
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'dS1');
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog2', 'dS1');
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'dSer1');
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'd1');
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'catalog1');
--
--------------------
---------------------
---- CATALOG RECORD
---------------------
---------------------


INSERT INTO "catalogrecord" ("id", "title","resource_id","content", "content_type", "content_url") VALUES ('cR1','cRTit1','catalog1','content','contentType', 'contentUrl');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR2','cRTit2','dSer1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR3','cRTit3','d1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR4','cRTit4','dS1');


---------------------
---------------------
---- CATALOGINRECORD
---------------------
---------------------
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR1', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR1', 'catalog2');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR2', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR3', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR4', 'catalog1');

---------------------
---------------------
---- Hints
---------------------
---------------------

INSERT INTO "hints" ("id_catalog_record", "id_hint") VALUES ('cR1', 'hint1');
INSERT INTO "hints" ("id_catalog_record", "id_hint") VALUES ('cR1', 'hint2');
INSERT INTO "hints" ("id_catalog_record", "id_hint") VALUES ('cR1', 'hint3');
INSERT INTO "hints" ("id_catalog_record", "id_hint") VALUES ('cR2', 'hint3');

---------------------
---------------------
---- Languages
---------------------
---------------------
INSERT INTO "language" ("id") VALUES ('es');
INSERT INTO "language" ("id")  VALUES ('en');
INSERT INTO "language" ("id")  VALUES ('eu');


---------------------
---------------------
---- Descriptions
---------------------
---------------------

INSERT INTO "description" ("id_description","id_resource") VALUES ('Descripc1Cat','catalog1');
INSERT INTO "description" ("id_description","id_resource") VALUES ('Descripc2Cat','catalog1');
INSERT INTO "description" ("id_description","id_resource")  VALUES ('Descript3Cat','catalog1');
INSERT INTO "description" ("id_description","id_resource")  VALUES ('Descript1Dat','d1');
INSERT INTO "description" ("id_description","id_resource")  VALUES ('Descripc1Ser','dSer1');

---------------------
---------------------
---- languages_descriptions
---------------------
---------------------
INSERT INTO "languages_descriptions" ("id_language","id_description","id_resource") VALUES ('es','Descripc1Cat','catalog1');
INSERT INTO "languages_descriptions" ("id_language","id_description","id_resource") VALUES ('es','Descripc2Cat','catalog1');
INSERT INTO "languages_descriptions" ("id_language","id_description","id_resource") VALUES ('eu','Descripc2Cat','catalog1');
INSERT INTO "languages_descriptions" ("id_language","id_description","id_resource") VALUES ('en','Descript3Cat','catalog1');
INSERT INTO "languages_descriptions" ("id_language","id_description","id_resource") VALUES ('es','Descript1Dat','d1');
INSERT INTO "languages_descriptions" ("id_language","id_description","id_resource") VALUES ('es','Descripc1Ser','dSer1');

---------------------
---------------------
---- Titles
---------------------
---------------------

INSERT INTO "titles_resource" ("id_title","id_resource")  VALUES ('catalogTit1','catalog1');
INSERT INTO "titles_resource" ("id_title","id_resource")  VALUES ('catalogTitEn1','catalog1');
INSERT INTO "titles_resource" ("id_title","id_resource")  VALUES ('catalogTit1','catalog2');
INSERT INTO "titles_resource" ("id_title","id_resource")  VALUES ('dTit1','d1');
INSERT INTO "titles_resource" ("id_title","id_resource")  VALUES ('dSerTit1','dSer1');
INSERT INTO "titles_resource" ("id_title","id_resource")  VALUES ('dSTit1','dS1');

INSERT INTO "titles_distribution" ("id_title","id_distribution")  VALUES ('DistTit1','Dist1');
INSERT INTO "titles_distribution" ("id_title","id_distribution") VALUES ('DistTit1','Dist2');
INSERT INTO "titles_distribution" ("id_title","id_distribution")  VALUES ('DistTit2','Dist1');
---------------------
---------------------
---- languages_titles
---------------------
---------------------
INSERT INTO "languages_titles_resources" ("id_language","id_title","id_resource") VALUES ('es','catalogTit1','catalog1');
INSERT INTO "languages_titles_resources" ("id_language","id_title","id_resource") VALUES ('en','catalogTitEn1','catalog1');
INSERT INTO "languages_titles_resources" ("id_language","id_title","id_resource") VALUES ('es','catalogTit1','catalog2');
INSERT INTO "languages_titles_resources" ("id_language","id_title","id_resource") VALUES ('en','dTit1','d1');
INSERT INTO "languages_titles_resources" ("id_language","id_title","id_resource") VALUES ('es','dSerTit1','dSer1');
INSERT INTO "languages_titles_resources" ("id_language","id_title","id_resource") VALUES ('es','dSTit1','dS1');

INSERT INTO "languages_titles_distribution" ("id_language","id_distribution","id_title") VALUES ('en','Dist1','DistTit1');
INSERT INTO "languages_titles_distribution" ("id_language","id_distribution","id_title") VALUES ('en','Dist2','DistTit1');
INSERT INTO "languages_titles_distribution" ("id_language","id_distribution","id_title") VALUES ('es','Dist1','DistTit2');


---------------------
---------------------
---- Resources-Languages
---------------------
---------------------
INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('es','catalog1');
INSERT INTO "languages_resources" ("id_language","id_resource")  VALUES ('en','catalog1');
INSERT INTO "languages_resources" ("id_language","id_resource")  VALUES ('eu','catalog1');
INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('en','d1');
INSERT INTO "languages_resources" ("id_language","id_resource")  VALUES ('es','dSer1');

---------------------
---------------------
---- Keyword
---------------------
---------------------
INSERT INTO "keyword" ("id_dataset","id_word","language_id") VALUES ('d1','keyword 1','en');
INSERT INTO "keyword" ("id_dataset","id_word","language_id") VALUES ('d1','keyword 2','eu');
INSERT INTO "keyword" ("id_dataset","id_word","language_id") VALUES ('d1','keyword 3','es');
INSERT INTO "keyword" ("id_dataset","id_word","language_id") VALUES ('d1','keyword 4','es');

---------------------
---------------------
---- Location
---------------------
---------------------
INSERT INTO "location" ("nombre","tipo")   VALUES ('España/Comunidad de Madrid/Madrid','Provincia');
INSERT INTO "location" ("nombre","tipo")   VALUES ('España','Pais');
---------------------
---------------------
---- Dataset-Location
---------------------
---------------------
INSERT INTO "dataset_location" ("location_id","dataset_id")   VALUES ('España/Comunidad de Madrid/Madrid','d1');
INSERT INTO "dataset_location" ("location_id","dataset_id")   VALUES ('España','d1');

---------------------
---------------------
---- Theme
---------------------
---------------------
INSERT INTO "theme" ("id") VALUES ('Theme1');
INSERT INTO "theme" ("id")  VALUES ('Theme2');

---------------------
---------------------
---- themesResources
---------------------
---------------------

INSERT INTO "themes_resources" ("id_theme","id_resource") VALUES ('Theme1','d1');
INSERT INTO "themes_resources" ("id_theme","id_resource") VALUES ('Theme1','catalog1');
INSERT INTO "themes_resources" ("id_theme","id_resource") VALUES ('Theme2','d1');


---------------------
---------------------
---- Identifiers
---------------------
---------------------

INSERT INTO "identifier" ("id","resource_id") VALUES ('IdRes1','d1');
INSERT INTO "identifier" ("id","resource_id") VALUES ('IdRes2','catalog1');
INSERT INTO "identifier" ("id","resource_id") VALUES ('IdRes3','d1');

INSERT INTO "identifier" ("id","distribution_id") VALUES ('IdDist1','Dist1');
INSERT INTO "identifier" ("id","distribution_id") VALUES ('IdDist2','Dist1');
INSERT INTO "identifier" ("id","distribution_id") VALUES ('IdDist3','Dist2');