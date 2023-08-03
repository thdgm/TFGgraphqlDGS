package es.unizar.iaaa.tfg.domain.resources

import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.ManyToMany
import java.io.Serializable

/*
 * Entity of DatasetSeries. Inherit from ResourceEntity.
 */
@Entity
@DiscriminatorValue("dataset_series")
class DatasetSeriesEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany(mappedBy = "inseries")
    lateinit var dataset: Collection<DatasetEntity>
}

/*

INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest1','2023-01-12T19:01:30+00:00','','2023-05-12T20:01:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest2','2023-02-12T19:01:30+00:00','','2023-02-12T19:01:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest3','2023-03-12T19:01:30+00:00','','2023-03-12T19:09:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest4','2023-04-12T19:01:30+00:00','','2023-04-12T19:08:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest5','2023-05-12T19:01:30+00:00','','2023-05-12T19:05:30+00:00','',null,null,null,'EA0022362');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest6','2023-01-14T19:01:30+00:00','','2023-01-14T19:05:30+00:00','',null,null,null,'L01082009');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest7','2023-01-12T19:10:30+00:00','','2023-01-12T19:12:30+00:00','',null,null,null,'L01082009');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest8','2023-06-12T19:01:30+00:00','','2023-06-12T19:04:30+00:00','',null,null,null,'U01900001');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest9','2023-05-02T19:01:30+00:00','','2023-05-02T19:11:30+00:00','',null,null,null,'U01900001');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest10','2022-01-12T19:01:30+00:00','','2022-01-12T19:15:30+00:00','',null,null,null,'EA0022362');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest11','2022-01-12T19:01:30+00:00','','2022-01-12T19:15:30+00:00','',null,null,null,'EA0022362');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('dataset_series','seriesTest12','2022-01-12T19:01:30+00:00','','2022-01-12T19:15:30+00:00','',null,null,null,'EA0022362');

INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest1','Título 1 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest2','Title 1 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest3','Title 2 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest4','Title 1 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest5','Title 2 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest6','Title 3 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest7','Title 4 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest8','Title 5 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest9','Title 6 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest10','Title 7 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest11','Title 6 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('seriesTest12','Title 7 test');

INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('es','seriesTest1','Título 1 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest2','Title 1 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest3','Title 2 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest4','Title 1 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest5','Title 2 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest6','Title 3 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest7','Title 4 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest8','Title 5 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest9','Title 6 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest10','Title 7 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest11','Title 6 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','seriesTest12','Title 7 test');

INSERT INTO description (id_description,id_resource) VALUES ('Descripción 1 test','seriesTest2');
INSERT INTO description (id_description,id_resource) VALUES ('Description 1 test','seriesTest5');
INSERT INTO description (id_description,id_resource) VALUES ('Description 10 test','seriesTest10');

INSERT INTO languages_descriptions (id_language,id_description,id_resource) VALUES ('es','Descripción 1 test','seriesTest2');
INSERT INTO languages_descriptions (id_language,id_description,id_resource) VALUES ('en','Description 1 test','seriesTest5');
INSERT INTO languages_descriptions (id_language,id_description,id_resource) VALUES ('en','Description 10 test','seriesTest10');

INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest1/CatalogRecord','','','','CR for testing','seriesTest1');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest2/CatalogRecord','','','','CR for testing','seriesTest2');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest3/CatalogRecord','','','','CR for testing','seriesTest3');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest4/CatalogRecord','','','','CR for testing','seriesTest4');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest5/CatalogRecord','','','','CR for testing','seriesTest5');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest6/CatalogRecord','','','','CR for testing','seriesTest6');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest7/CatalogRecord','','','','CR for testing','seriesTest7');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest8/CatalogRecord','','','','CR for testing','seriesTest8');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest9/CatalogRecord','','','','CR for testing','seriesTest9');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest10/CatalogRecord','','','','CR for testing','seriesTest10');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest11/CatalogRecord','','','','CR for testing','seriesTest11');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('seriesTest12/CatalogRecord','','','','CR for testing','seriesTest12');

INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest1/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest2/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest3/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest4/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest5/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest6/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest7/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest8/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest9/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest10/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest11/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','seriesTest12/CatalogRecord');

INSERT INTO inseries (dataset_id,data_series_id) VALUES ('21e96ff5-c75c-3f43-a5f0-55e304ac39c7','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('302ffe35-0dad-3c20-b96a-d1fea7876813','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('00028c11-e165-3ae5-a2fe-f3bd42eb9b02','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('00065c3c-d480-3abb-8f56-1e6e1409518d','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('00288229-7188-3e0e-8011-5411a95f8b86','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('0019e8bb-548b-300e-86e0-a5f0fed39387','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('00096450-f3de-3660-b17d-66c304e4cef8','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('000a574a-f218-359f-9d0e-5a5ead3bbaa9','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('0011eeb8-a9ad-328e-8bd6-34d2663eeaaf','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('000f1a62-7082-3677-bd30-ebafbe596253','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('0011e9c5-1211-37de-af3f-c36bebefb900','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('0011b48e-ec30-3f51-899d-2e7a1140176a','seriesTest1');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('302ffe35-0dad-3c20-b96a-d1fea7876813','seriesTest2');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('4bfcfcd3-b67e-3d8e-b52b-66f933d30bfc','seriesTest3');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('d06ced1b-8f86-3826-99fb-b3dc09c3e785','seriesTest4');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('23a82498-bd1f-34f5-bc9c-74514b8d84c6','seriesTest5');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('4575a472-fbe9-32a2-9a78-b5891fac6859','seriesTest6');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('01dc9d53-262b-3124-96ab-c5b6da29f6df','seriesTest7');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('11861360-7699-3eca-87dc-17ba87116bf6','seriesTest8');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('62c75a72-0eb8-3b6f-938b-5a808daf1dbf','seriesTest9');
INSERT INTO inseries (dataset_id,data_series_id) VALUES ('c99299b5-d5f7-39c8-82ac-d68fff399802','seriesTest10');

INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest1','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest2','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest3','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest4','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest5','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest6','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest7','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest8','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest9','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest10','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest11','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('seriesTest12','root');




 */