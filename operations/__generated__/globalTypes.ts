/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum NameEnum {
  INSSURANCE = "INSSURANCE",
  MEMBERSH1PFEE1 = "MEMBERSH1PFEE1",
  MEMBERSHIPFEE2 = "MEMBERSHIPFEE2",
}

export enum QueryMode {
  default = "default",
  insensitive = "insensitive",
}

export enum RoleEnum {
  ADMIN = "ADMIN",
  MONITOR = "MONITOR",
  USER = "USER",
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}

export enum StatusEnum {
  NOTAPPLICABLE = "NOTAPPLICABLE",
  NOTYETPAYABLE = "NOTYETPAYABLE",
  PAID = "PAID",
  UNPAID = "UNPAID",
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean | null;
}

export interface BoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface CancellationsCreateInput {
  date: any;
  created_at?: any | null;
  deleted_at?: any | null;
  course: CoursesCreateNestedOneWithoutCancellationsInput;
}

export interface CancellationsCreateManyCourseInput {
  id?: number | null;
  date: any;
  created_at?: any | null;
  deleted_at?: any | null;
}

export interface CancellationsCreateManyCourseInputEnvelope {
  data?: CancellationsCreateManyCourseInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface CancellationsCreateNestedManyWithoutCourseInput {
  create?: CancellationsCreateWithoutCourseInput[] | null;
  connectOrCreate?: CancellationsCreateOrConnectWithoutCourseInput[] | null;
  createMany?: CancellationsCreateManyCourseInputEnvelope | null;
  connect?: CancellationsWhereUniqueInput[] | null;
}

export interface CancellationsCreateOrConnectWithoutCourseInput {
  where: CancellationsWhereUniqueInput;
  create: CancellationsCreateWithoutCourseInput;
}

export interface CancellationsCreateWithoutCourseInput {
  date: any;
  created_at?: any | null;
  deleted_at?: any | null;
}

export interface CancellationsListRelationFilter {
  every?: CancellationsWhereInput | null;
  some?: CancellationsWhereInput | null;
  none?: CancellationsWhereInput | null;
}

export interface CancellationsScalarWhereInput {
  AND?: CancellationsScalarWhereInput[] | null;
  OR?: CancellationsScalarWhereInput[] | null;
  NOT?: CancellationsScalarWhereInput[] | null;
  id?: IntFilter | null;
  date?: DateTimeFilter | null;
  course_id?: IntFilter | null;
  created_at?: DateTimeFilter | null;
  deleted_at?: DateTimeNullableFilter | null;
}

export interface CancellationsUpdateManyMutationInput {
  date?: DateTimeFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  deleted_at?: NullableDateTimeFieldUpdateOperationsInput | null;
}

export interface CancellationsUpdateManyWithWhereWithoutCourseInput {
  where: CancellationsScalarWhereInput;
  data: CancellationsUpdateManyMutationInput;
}

export interface CancellationsUpdateManyWithoutCourseInput {
  create?: CancellationsCreateWithoutCourseInput[] | null;
  connectOrCreate?: CancellationsCreateOrConnectWithoutCourseInput[] | null;
  upsert?: CancellationsUpsertWithWhereUniqueWithoutCourseInput[] | null;
  createMany?: CancellationsCreateManyCourseInputEnvelope | null;
  connect?: CancellationsWhereUniqueInput[] | null;
  set?: CancellationsWhereUniqueInput[] | null;
  disconnect?: CancellationsWhereUniqueInput[] | null;
  delete?: CancellationsWhereUniqueInput[] | null;
  update?: CancellationsUpdateWithWhereUniqueWithoutCourseInput[] | null;
  updateMany?: CancellationsUpdateManyWithWhereWithoutCourseInput[] | null;
  deleteMany?: CancellationsScalarWhereInput[] | null;
}

export interface CancellationsUpdateWithWhereUniqueWithoutCourseInput {
  where: CancellationsWhereUniqueInput;
  data: CancellationsUpdateWithoutCourseInput;
}

export interface CancellationsUpdateWithoutCourseInput {
  date?: DateTimeFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  deleted_at?: NullableDateTimeFieldUpdateOperationsInput | null;
}

export interface CancellationsUpsertWithWhereUniqueWithoutCourseInput {
  where: CancellationsWhereUniqueInput;
  update: CancellationsUpdateWithoutCourseInput;
  create: CancellationsCreateWithoutCourseInput;
}

export interface CancellationsWhereInput {
  AND?: CancellationsWhereInput[] | null;
  OR?: CancellationsWhereInput[] | null;
  NOT?: CancellationsWhereInput[] | null;
  id?: IntFilter | null;
  date?: DateTimeFilter | null;
  course_id?: IntFilter | null;
  created_at?: DateTimeFilter | null;
  deleted_at?: DateTimeNullableFilter | null;
  course?: CoursesWhereInput | null;
}

export interface CancellationsWhereUniqueInput {
  id?: number | null;
}

export interface ChildrenCreateInput {
  name: string;
  birth_date: any;
  first_name: string;
  tutor: UsersCreateNestedOneWithoutChildrenInput;
  Orders?: OrdersCreateNestedManyWithoutChildInput | null;
  ChildrenOnCourse?: ChildrenOnCourseCreateNestedManyWithoutChildrenInput | null;
}

export interface ChildrenCreateNestedOneWithoutChildrenOnCourseInput {
  create?: ChildrenCreateWithoutChildrenOnCourseInput | null;
  connectOrCreate?: ChildrenCreateOrConnectWithoutChildrenOnCourseInput | null;
  connect?: ChildrenWhereUniqueInput | null;
}

export interface ChildrenCreateNestedOneWithoutOrdersInput {
  create?: ChildrenCreateWithoutOrdersInput | null;
  connectOrCreate?: ChildrenCreateOrConnectWithoutOrdersInput | null;
  connect?: ChildrenWhereUniqueInput | null;
}

export interface ChildrenCreateOrConnectWithoutChildrenOnCourseInput {
  where: ChildrenWhereUniqueInput;
  create: ChildrenCreateWithoutChildrenOnCourseInput;
}

export interface ChildrenCreateOrConnectWithoutOrdersInput {
  where: ChildrenWhereUniqueInput;
  create: ChildrenCreateWithoutOrdersInput;
}

export interface ChildrenCreateWithoutChildrenOnCourseInput {
  name: string;
  birth_date: any;
  first_name: string;
  tutor: UsersCreateNestedOneWithoutChildrenInput;
  Orders?: OrdersCreateNestedManyWithoutChildInput | null;
}

export interface ChildrenCreateWithoutOrdersInput {
  name: string;
  birth_date: any;
  first_name: string;
  tutor: UsersCreateNestedOneWithoutChildrenInput;
  ChildrenOnCourse?: ChildrenOnCourseCreateNestedManyWithoutChildrenInput | null;
}

export interface ChildrenListRelationFilter {
  every?: ChildrenWhereInput | null;
  some?: ChildrenWhereInput | null;
  none?: ChildrenWhereInput | null;
}

export interface ChildrenOnCourseCourseIdChildrenIdCompoundUniqueInput {
  courseId: number;
  childrenId: number;
}

export interface ChildrenOnCourseCreateManyChildrenInput {
  courseId: number;
  inscriptionDate?: any | null;
}

export interface ChildrenOnCourseCreateManyChildrenInputEnvelope {
  data?: ChildrenOnCourseCreateManyChildrenInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface ChildrenOnCourseCreateManyCourseInput {
  childrenId: number;
  inscriptionDate?: any | null;
}

export interface ChildrenOnCourseCreateManyCourseInputEnvelope {
  data?: ChildrenOnCourseCreateManyCourseInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface ChildrenOnCourseCreateNestedManyWithoutChildrenInput {
  create?: ChildrenOnCourseCreateWithoutChildrenInput[] | null;
  connectOrCreate?: ChildrenOnCourseCreateOrConnectWithoutChildrenInput[] | null;
  createMany?: ChildrenOnCourseCreateManyChildrenInputEnvelope | null;
  connect?: ChildrenOnCourseWhereUniqueInput[] | null;
}

export interface ChildrenOnCourseCreateNestedManyWithoutCourseInput {
  create?: ChildrenOnCourseCreateWithoutCourseInput[] | null;
  connectOrCreate?: ChildrenOnCourseCreateOrConnectWithoutCourseInput[] | null;
  createMany?: ChildrenOnCourseCreateManyCourseInputEnvelope | null;
  connect?: ChildrenOnCourseWhereUniqueInput[] | null;
}

export interface ChildrenOnCourseCreateOrConnectWithoutChildrenInput {
  where: ChildrenOnCourseWhereUniqueInput;
  create: ChildrenOnCourseCreateWithoutChildrenInput;
}

export interface ChildrenOnCourseCreateOrConnectWithoutCourseInput {
  where: ChildrenOnCourseWhereUniqueInput;
  create: ChildrenOnCourseCreateWithoutCourseInput;
}

export interface ChildrenOnCourseCreateWithoutChildrenInput {
  inscriptionDate?: any | null;
  course: CoursesCreateNestedOneWithoutChildrenOnCourseInput;
}

export interface ChildrenOnCourseCreateWithoutCourseInput {
  inscriptionDate?: any | null;
  children: ChildrenCreateNestedOneWithoutChildrenOnCourseInput;
}

export interface ChildrenOnCourseListRelationFilter {
  every?: ChildrenOnCourseWhereInput | null;
  some?: ChildrenOnCourseWhereInput | null;
  none?: ChildrenOnCourseWhereInput | null;
}

export interface ChildrenOnCourseScalarWhereInput {
  AND?: ChildrenOnCourseScalarWhereInput[] | null;
  OR?: ChildrenOnCourseScalarWhereInput[] | null;
  NOT?: ChildrenOnCourseScalarWhereInput[] | null;
  childrenId?: IntFilter | null;
  courseId?: IntFilter | null;
  inscriptionDate?: DateTimeNullableFilter | null;
}

export interface ChildrenOnCourseUpdateInput {
  inscriptionDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  children?: ChildrenUpdateOneRequiredWithoutChildrenOnCourseInput | null;
  course?: CoursesUpdateOneRequiredWithoutChildrenOnCourseInput | null;
}

export interface ChildrenOnCourseUpdateManyMutationInput {
  inscriptionDate?: NullableDateTimeFieldUpdateOperationsInput | null;
}

export interface ChildrenOnCourseUpdateManyWithWhereWithoutChildrenInput {
  where: ChildrenOnCourseScalarWhereInput;
  data: ChildrenOnCourseUpdateManyMutationInput;
}

export interface ChildrenOnCourseUpdateManyWithWhereWithoutCourseInput {
  where: ChildrenOnCourseScalarWhereInput;
  data: ChildrenOnCourseUpdateManyMutationInput;
}

export interface ChildrenOnCourseUpdateManyWithoutChildrenInput {
  create?: ChildrenOnCourseCreateWithoutChildrenInput[] | null;
  connectOrCreate?: ChildrenOnCourseCreateOrConnectWithoutChildrenInput[] | null;
  upsert?: ChildrenOnCourseUpsertWithWhereUniqueWithoutChildrenInput[] | null;
  createMany?: ChildrenOnCourseCreateManyChildrenInputEnvelope | null;
  connect?: ChildrenOnCourseWhereUniqueInput[] | null;
  set?: ChildrenOnCourseWhereUniqueInput[] | null;
  disconnect?: ChildrenOnCourseWhereUniqueInput[] | null;
  delete?: ChildrenOnCourseWhereUniqueInput[] | null;
  update?: ChildrenOnCourseUpdateWithWhereUniqueWithoutChildrenInput[] | null;
  updateMany?: ChildrenOnCourseUpdateManyWithWhereWithoutChildrenInput[] | null;
  deleteMany?: ChildrenOnCourseScalarWhereInput[] | null;
}

export interface ChildrenOnCourseUpdateManyWithoutCourseInput {
  create?: ChildrenOnCourseCreateWithoutCourseInput[] | null;
  connectOrCreate?: ChildrenOnCourseCreateOrConnectWithoutCourseInput[] | null;
  upsert?: ChildrenOnCourseUpsertWithWhereUniqueWithoutCourseInput[] | null;
  createMany?: ChildrenOnCourseCreateManyCourseInputEnvelope | null;
  connect?: ChildrenOnCourseWhereUniqueInput[] | null;
  set?: ChildrenOnCourseWhereUniqueInput[] | null;
  disconnect?: ChildrenOnCourseWhereUniqueInput[] | null;
  delete?: ChildrenOnCourseWhereUniqueInput[] | null;
  update?: ChildrenOnCourseUpdateWithWhereUniqueWithoutCourseInput[] | null;
  updateMany?: ChildrenOnCourseUpdateManyWithWhereWithoutCourseInput[] | null;
  deleteMany?: ChildrenOnCourseScalarWhereInput[] | null;
}

export interface ChildrenOnCourseUpdateWithWhereUniqueWithoutChildrenInput {
  where: ChildrenOnCourseWhereUniqueInput;
  data: ChildrenOnCourseUpdateWithoutChildrenInput;
}

export interface ChildrenOnCourseUpdateWithWhereUniqueWithoutCourseInput {
  where: ChildrenOnCourseWhereUniqueInput;
  data: ChildrenOnCourseUpdateWithoutCourseInput;
}

export interface ChildrenOnCourseUpdateWithoutChildrenInput {
  inscriptionDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  course?: CoursesUpdateOneRequiredWithoutChildrenOnCourseInput | null;
}

export interface ChildrenOnCourseUpdateWithoutCourseInput {
  inscriptionDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  children?: ChildrenUpdateOneRequiredWithoutChildrenOnCourseInput | null;
}

export interface ChildrenOnCourseUpsertWithWhereUniqueWithoutChildrenInput {
  where: ChildrenOnCourseWhereUniqueInput;
  update: ChildrenOnCourseUpdateWithoutChildrenInput;
  create: ChildrenOnCourseCreateWithoutChildrenInput;
}

export interface ChildrenOnCourseUpsertWithWhereUniqueWithoutCourseInput {
  where: ChildrenOnCourseWhereUniqueInput;
  update: ChildrenOnCourseUpdateWithoutCourseInput;
  create: ChildrenOnCourseCreateWithoutCourseInput;
}

export interface ChildrenOnCourseWhereInput {
  AND?: ChildrenOnCourseWhereInput[] | null;
  OR?: ChildrenOnCourseWhereInput[] | null;
  NOT?: ChildrenOnCourseWhereInput[] | null;
  children?: ChildrenWhereInput | null;
  childrenId?: IntFilter | null;
  course?: CoursesWhereInput | null;
  courseId?: IntFilter | null;
  inscriptionDate?: DateTimeNullableFilter | null;
}

export interface ChildrenOnCourseWhereUniqueInput {
  courseId_childrenId?: ChildrenOnCourseCourseIdChildrenIdCompoundUniqueInput | null;
}

export interface ChildrenUpdateInput {
  name?: StringFieldUpdateOperationsInput | null;
  birth_date?: DateTimeFieldUpdateOperationsInput | null;
  first_name?: StringFieldUpdateOperationsInput | null;
  tutor?: UsersUpdateOneRequiredWithoutChildrenInput | null;
  Orders?: OrdersUpdateManyWithoutChildInput | null;
  ChildrenOnCourse?: ChildrenOnCourseUpdateManyWithoutChildrenInput | null;
}

export interface ChildrenUpdateOneRequiredWithoutChildrenOnCourseInput {
  create?: ChildrenCreateWithoutChildrenOnCourseInput | null;
  connectOrCreate?: ChildrenCreateOrConnectWithoutChildrenOnCourseInput | null;
  upsert?: ChildrenUpsertWithoutChildrenOnCourseInput | null;
  connect?: ChildrenWhereUniqueInput | null;
  update?: ChildrenUpdateWithoutChildrenOnCourseInput | null;
}

export interface ChildrenUpdateOneRequiredWithoutOrdersInput {
  create?: ChildrenCreateWithoutOrdersInput | null;
  connectOrCreate?: ChildrenCreateOrConnectWithoutOrdersInput | null;
  upsert?: ChildrenUpsertWithoutOrdersInput | null;
  connect?: ChildrenWhereUniqueInput | null;
  update?: ChildrenUpdateWithoutOrdersInput | null;
}

export interface ChildrenUpdateWithoutChildrenOnCourseInput {
  name?: StringFieldUpdateOperationsInput | null;
  birth_date?: DateTimeFieldUpdateOperationsInput | null;
  first_name?: StringFieldUpdateOperationsInput | null;
  tutor?: UsersUpdateOneRequiredWithoutChildrenInput | null;
  Orders?: OrdersUpdateManyWithoutChildInput | null;
}

export interface ChildrenUpdateWithoutOrdersInput {
  name?: StringFieldUpdateOperationsInput | null;
  birth_date?: DateTimeFieldUpdateOperationsInput | null;
  first_name?: StringFieldUpdateOperationsInput | null;
  tutor?: UsersUpdateOneRequiredWithoutChildrenInput | null;
  ChildrenOnCourse?: ChildrenOnCourseUpdateManyWithoutChildrenInput | null;
}

export interface ChildrenUpsertWithoutChildrenOnCourseInput {
  update: ChildrenUpdateWithoutChildrenOnCourseInput;
  create: ChildrenCreateWithoutChildrenOnCourseInput;
}

export interface ChildrenUpsertWithoutOrdersInput {
  update: ChildrenUpdateWithoutOrdersInput;
  create: ChildrenCreateWithoutOrdersInput;
}

export interface ChildrenWhereInput {
  AND?: ChildrenWhereInput[] | null;
  OR?: ChildrenWhereInput[] | null;
  NOT?: ChildrenWhereInput[] | null;
  id?: IntFilter | null;
  name?: StringFilter | null;
  birth_date?: DateTimeFilter | null;
  first_name?: StringFilter | null;
  tutor_id?: StringFilter | null;
  tutor?: UsersWhereInput | null;
  Orders?: OrdersListRelationFilter | null;
  ChildrenOnCourse?: ChildrenOnCourseListRelationFilter | null;
}

export interface ChildrenWhereUniqueInput {
  id?: number | null;
}

export interface CoursesCreateInput {
  places: number;
  end_time: any;
  start_time: any;
  day_of_week: number;
  created_at?: any | null;
  cancellations?: CancellationsCreateNestedManyWithoutCourseInput | null;
  ChildrenOnCourse?: ChildrenOnCourseCreateNestedManyWithoutCourseInput | null;
}

export interface CoursesCreateNestedOneWithoutCancellationsInput {
  create?: CoursesCreateWithoutCancellationsInput | null;
  connectOrCreate?: CoursesCreateOrConnectWithoutCancellationsInput | null;
  connect?: CoursesWhereUniqueInput | null;
}

export interface CoursesCreateNestedOneWithoutChildrenOnCourseInput {
  create?: CoursesCreateWithoutChildrenOnCourseInput | null;
  connectOrCreate?: CoursesCreateOrConnectWithoutChildrenOnCourseInput | null;
  connect?: CoursesWhereUniqueInput | null;
}

export interface CoursesCreateOrConnectWithoutCancellationsInput {
  where: CoursesWhereUniqueInput;
  create: CoursesCreateWithoutCancellationsInput;
}

export interface CoursesCreateOrConnectWithoutChildrenOnCourseInput {
  where: CoursesWhereUniqueInput;
  create: CoursesCreateWithoutChildrenOnCourseInput;
}

export interface CoursesCreateWithoutCancellationsInput {
  places: number;
  end_time: any;
  start_time: any;
  day_of_week: number;
  created_at?: any | null;
  ChildrenOnCourse?: ChildrenOnCourseCreateNestedManyWithoutCourseInput | null;
}

export interface CoursesCreateWithoutChildrenOnCourseInput {
  places: number;
  end_time: any;
  start_time: any;
  day_of_week: number;
  created_at?: any | null;
  cancellations?: CancellationsCreateNestedManyWithoutCourseInput | null;
}

export interface CoursesOrderByInput {
  id?: SortOrder | null;
  places?: SortOrder | null;
  end_time?: SortOrder | null;
  start_time?: SortOrder | null;
  day_of_week?: SortOrder | null;
  created_at?: SortOrder | null;
}

export interface CoursesUpdateInput {
  places?: IntFieldUpdateOperationsInput | null;
  end_time?: DateTimeFieldUpdateOperationsInput | null;
  start_time?: DateTimeFieldUpdateOperationsInput | null;
  day_of_week?: IntFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  cancellations?: CancellationsUpdateManyWithoutCourseInput | null;
  ChildrenOnCourse?: ChildrenOnCourseUpdateManyWithoutCourseInput | null;
}

export interface CoursesUpdateOneRequiredWithoutChildrenOnCourseInput {
  create?: CoursesCreateWithoutChildrenOnCourseInput | null;
  connectOrCreate?: CoursesCreateOrConnectWithoutChildrenOnCourseInput | null;
  upsert?: CoursesUpsertWithoutChildrenOnCourseInput | null;
  connect?: CoursesWhereUniqueInput | null;
  update?: CoursesUpdateWithoutChildrenOnCourseInput | null;
}

export interface CoursesUpdateWithoutChildrenOnCourseInput {
  places?: IntFieldUpdateOperationsInput | null;
  end_time?: DateTimeFieldUpdateOperationsInput | null;
  start_time?: DateTimeFieldUpdateOperationsInput | null;
  day_of_week?: IntFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  cancellations?: CancellationsUpdateManyWithoutCourseInput | null;
}

export interface CoursesUpsertWithoutChildrenOnCourseInput {
  update: CoursesUpdateWithoutChildrenOnCourseInput;
  create: CoursesCreateWithoutChildrenOnCourseInput;
}

export interface CoursesWhereInput {
  AND?: CoursesWhereInput[] | null;
  OR?: CoursesWhereInput[] | null;
  NOT?: CoursesWhereInput[] | null;
  id?: IntFilter | null;
  places?: IntFilter | null;
  end_time?: DateTimeFilter | null;
  start_time?: DateTimeFilter | null;
  day_of_week?: IntFilter | null;
  created_at?: DateTimeFilter | null;
  cancellations?: CancellationsListRelationFilter | null;
  ChildrenOnCourse?: ChildrenOnCourseListRelationFilter | null;
}

export interface CoursesWhereUniqueInput {
  id?: number | null;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: any | null;
}

export interface DateTimeFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeFilter | null;
}

export interface DateTimeNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeNullableFilter | null;
}

export interface EnumNameEnumFieldUpdateOperationsInput {
  set?: NameEnum | null;
}

export interface EnumNameEnumFilter {
  equals?: NameEnum | null;
  in?: NameEnum[] | null;
  notIn?: NameEnum[] | null;
  not?: NestedEnumNameEnumFilter | null;
}

export interface EnumRoleEnumFieldUpdateOperationsInput {
  set?: RoleEnum | null;
}

export interface EnumRoleEnumFilter {
  equals?: RoleEnum | null;
  in?: RoleEnum[] | null;
  notIn?: RoleEnum[] | null;
  not?: NestedEnumRoleEnumFilter | null;
}

export interface EnumStatusEnumFieldUpdateOperationsInput {
  set?: StatusEnum | null;
}

export interface EnumStatusEnumFilter {
  equals?: StatusEnum | null;
  in?: StatusEnum[] | null;
  notIn?: StatusEnum[] | null;
  not?: NestedEnumStatusEnumFilter | null;
}

export interface IntFieldUpdateOperationsInput {
  set?: number | null;
  increment?: number | null;
  decrement?: number | null;
  multiply?: number | null;
  divide?: number | null;
}

export interface IntFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntFilter | null;
}

export interface NestedBoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface NestedDateTimeFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeFilter | null;
}

export interface NestedDateTimeNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeNullableFilter | null;
}

export interface NestedEnumNameEnumFilter {
  equals?: NameEnum | null;
  in?: NameEnum[] | null;
  notIn?: NameEnum[] | null;
  not?: NestedEnumNameEnumFilter | null;
}

export interface NestedEnumRoleEnumFilter {
  equals?: RoleEnum | null;
  in?: RoleEnum[] | null;
  notIn?: RoleEnum[] | null;
  not?: NestedEnumRoleEnumFilter | null;
}

export interface NestedEnumStatusEnumFilter {
  equals?: StatusEnum | null;
  in?: StatusEnum[] | null;
  notIn?: StatusEnum[] | null;
  not?: NestedEnumStatusEnumFilter | null;
}

export interface NestedIntFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntFilter | null;
}

export interface NestedStringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  not?: NestedStringFilter | null;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  not?: NestedStringNullableFilter | null;
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: any | null;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface OptionsCreateNestedOneWithoutOrdersInput {
  create?: OptionsCreateWithoutOrdersInput | null;
  connectOrCreate?: OptionsCreateOrConnectWithoutOrdersInput | null;
  connect?: OptionsWhereUniqueInput | null;
}

export interface OptionsCreateNestedOneWithoutPricesInput {
  create?: OptionsCreateWithoutPricesInput | null;
  connectOrCreate?: OptionsCreateOrConnectWithoutPricesInput | null;
  connect?: OptionsWhereUniqueInput | null;
}

export interface OptionsCreateOrConnectWithoutOrdersInput {
  where: OptionsWhereUniqueInput;
  create: OptionsCreateWithoutOrdersInput;
}

export interface OptionsCreateOrConnectWithoutPricesInput {
  where: OptionsWhereUniqueInput;
  create: OptionsCreateWithoutPricesInput;
}

export interface OptionsCreateWithoutOrdersInput {
  created_at?: any | null;
  name: NameEnum;
  Prices?: PricesCreateNestedManyWithoutOptionInput | null;
}

export interface OptionsCreateWithoutPricesInput {
  created_at?: any | null;
  name: NameEnum;
  orders?: Options_setCreateNestedManyWithoutOptionInput | null;
}

export interface OptionsUpdateOneRequiredWithoutOrdersInput {
  create?: OptionsCreateWithoutOrdersInput | null;
  connectOrCreate?: OptionsCreateOrConnectWithoutOrdersInput | null;
  upsert?: OptionsUpsertWithoutOrdersInput | null;
  connect?: OptionsWhereUniqueInput | null;
  update?: OptionsUpdateWithoutOrdersInput | null;
}

export interface OptionsUpdateOneRequiredWithoutPricesInput {
  create?: OptionsCreateWithoutPricesInput | null;
  connectOrCreate?: OptionsCreateOrConnectWithoutPricesInput | null;
  upsert?: OptionsUpsertWithoutPricesInput | null;
  connect?: OptionsWhereUniqueInput | null;
  update?: OptionsUpdateWithoutPricesInput | null;
}

export interface OptionsUpdateWithoutOrdersInput {
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  name?: EnumNameEnumFieldUpdateOperationsInput | null;
  Prices?: PricesUpdateManyWithoutOptionInput | null;
}

export interface OptionsUpdateWithoutPricesInput {
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  name?: EnumNameEnumFieldUpdateOperationsInput | null;
  orders?: Options_setUpdateManyWithoutOptionInput | null;
}

export interface OptionsUpsertWithoutOrdersInput {
  update: OptionsUpdateWithoutOrdersInput;
  create: OptionsCreateWithoutOrdersInput;
}

export interface OptionsUpsertWithoutPricesInput {
  update: OptionsUpdateWithoutPricesInput;
  create: OptionsCreateWithoutPricesInput;
}

export interface OptionsWhereInput {
  AND?: OptionsWhereInput[] | null;
  OR?: OptionsWhereInput[] | null;
  NOT?: OptionsWhereInput[] | null;
  id?: IntFilter | null;
  created_at?: DateTimeFilter | null;
  name?: EnumNameEnumFilter | null;
  orders?: Options_setListRelationFilter | null;
  Prices?: PricesListRelationFilter | null;
}

export interface OptionsWhereUniqueInput {
  id?: number | null;
  name?: NameEnum | null;
}

export interface Options_setCreateManyOptionInput {
  id?: number | null;
  status?: StatusEnum | null;
  paid_at?: any | null;
  cancelled_at?: any | null;
  order_id: number;
  price_id: number;
}

export interface Options_setCreateManyOptionInputEnvelope {
  data?: Options_setCreateManyOptionInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface Options_setCreateManyOrderInput {
  id?: number | null;
  status?: StatusEnum | null;
  paid_at?: any | null;
  cancelled_at?: any | null;
  option_id: number;
  price_id: number;
}

export interface Options_setCreateManyOrderInputEnvelope {
  data?: Options_setCreateManyOrderInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface Options_setCreateManyPriceInput {
  id?: number | null;
  status?: StatusEnum | null;
  paid_at?: any | null;
  cancelled_at?: any | null;
  option_id: number;
  order_id: number;
}

export interface Options_setCreateManyPriceInputEnvelope {
  data?: Options_setCreateManyPriceInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface Options_setCreateNestedManyWithoutOptionInput {
  create?: Options_setCreateWithoutOptionInput[] | null;
  connectOrCreate?: Options_setCreateOrConnectWithoutOptionInput[] | null;
  createMany?: Options_setCreateManyOptionInputEnvelope | null;
  connect?: Options_setWhereUniqueInput[] | null;
}

export interface Options_setCreateNestedManyWithoutOrderInput {
  create?: Options_setCreateWithoutOrderInput[] | null;
  connectOrCreate?: Options_setCreateOrConnectWithoutOrderInput[] | null;
  createMany?: Options_setCreateManyOrderInputEnvelope | null;
  connect?: Options_setWhereUniqueInput[] | null;
}

export interface Options_setCreateNestedManyWithoutPriceInput {
  create?: Options_setCreateWithoutPriceInput[] | null;
  connectOrCreate?: Options_setCreateOrConnectWithoutPriceInput[] | null;
  createMany?: Options_setCreateManyPriceInputEnvelope | null;
  connect?: Options_setWhereUniqueInput[] | null;
}

export interface Options_setCreateOrConnectWithoutOptionInput {
  where: Options_setWhereUniqueInput;
  create: Options_setCreateWithoutOptionInput;
}

export interface Options_setCreateOrConnectWithoutOrderInput {
  where: Options_setWhereUniqueInput;
  create: Options_setCreateWithoutOrderInput;
}

export interface Options_setCreateOrConnectWithoutPriceInput {
  where: Options_setWhereUniqueInput;
  create: Options_setCreateWithoutPriceInput;
}

export interface Options_setCreateWithoutOptionInput {
  status?: StatusEnum | null;
  paid_at?: any | null;
  cancelled_at?: any | null;
  order: OrdersCreateNestedOneWithoutOptions_setInput;
  price: PricesCreateNestedOneWithoutOptions_setInput;
}

export interface Options_setCreateWithoutOrderInput {
  status?: StatusEnum | null;
  paid_at?: any | null;
  cancelled_at?: any | null;
  option: OptionsCreateNestedOneWithoutOrdersInput;
  price: PricesCreateNestedOneWithoutOptions_setInput;
}

export interface Options_setCreateWithoutPriceInput {
  status?: StatusEnum | null;
  paid_at?: any | null;
  cancelled_at?: any | null;
  option: OptionsCreateNestedOneWithoutOrdersInput;
  order: OrdersCreateNestedOneWithoutOptions_setInput;
}

export interface Options_setListRelationFilter {
  every?: Options_setWhereInput | null;
  some?: Options_setWhereInput | null;
  none?: Options_setWhereInput | null;
}

export interface Options_setScalarWhereInput {
  AND?: Options_setScalarWhereInput[] | null;
  OR?: Options_setScalarWhereInput[] | null;
  NOT?: Options_setScalarWhereInput[] | null;
  id?: IntFilter | null;
  status?: EnumStatusEnumFilter | null;
  paid_at?: DateTimeNullableFilter | null;
  cancelled_at?: DateTimeNullableFilter | null;
  option_id?: IntFilter | null;
  order_id?: IntFilter | null;
  price_id?: IntFilter | null;
}

export interface Options_setUpdateManyMutationInput {
  status?: EnumStatusEnumFieldUpdateOperationsInput | null;
  paid_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | null;
}

export interface Options_setUpdateManyWithWhereWithoutOptionInput {
  where: Options_setScalarWhereInput;
  data: Options_setUpdateManyMutationInput;
}

export interface Options_setUpdateManyWithWhereWithoutOrderInput {
  where: Options_setScalarWhereInput;
  data: Options_setUpdateManyMutationInput;
}

export interface Options_setUpdateManyWithWhereWithoutPriceInput {
  where: Options_setScalarWhereInput;
  data: Options_setUpdateManyMutationInput;
}

export interface Options_setUpdateManyWithoutOptionInput {
  create?: Options_setCreateWithoutOptionInput[] | null;
  connectOrCreate?: Options_setCreateOrConnectWithoutOptionInput[] | null;
  upsert?: Options_setUpsertWithWhereUniqueWithoutOptionInput[] | null;
  createMany?: Options_setCreateManyOptionInputEnvelope | null;
  connect?: Options_setWhereUniqueInput[] | null;
  set?: Options_setWhereUniqueInput[] | null;
  disconnect?: Options_setWhereUniqueInput[] | null;
  delete?: Options_setWhereUniqueInput[] | null;
  update?: Options_setUpdateWithWhereUniqueWithoutOptionInput[] | null;
  updateMany?: Options_setUpdateManyWithWhereWithoutOptionInput[] | null;
  deleteMany?: Options_setScalarWhereInput[] | null;
}

export interface Options_setUpdateManyWithoutOrderInput {
  create?: Options_setCreateWithoutOrderInput[] | null;
  connectOrCreate?: Options_setCreateOrConnectWithoutOrderInput[] | null;
  upsert?: Options_setUpsertWithWhereUniqueWithoutOrderInput[] | null;
  createMany?: Options_setCreateManyOrderInputEnvelope | null;
  connect?: Options_setWhereUniqueInput[] | null;
  set?: Options_setWhereUniqueInput[] | null;
  disconnect?: Options_setWhereUniqueInput[] | null;
  delete?: Options_setWhereUniqueInput[] | null;
  update?: Options_setUpdateWithWhereUniqueWithoutOrderInput[] | null;
  updateMany?: Options_setUpdateManyWithWhereWithoutOrderInput[] | null;
  deleteMany?: Options_setScalarWhereInput[] | null;
}

export interface Options_setUpdateManyWithoutPriceInput {
  create?: Options_setCreateWithoutPriceInput[] | null;
  connectOrCreate?: Options_setCreateOrConnectWithoutPriceInput[] | null;
  upsert?: Options_setUpsertWithWhereUniqueWithoutPriceInput[] | null;
  createMany?: Options_setCreateManyPriceInputEnvelope | null;
  connect?: Options_setWhereUniqueInput[] | null;
  set?: Options_setWhereUniqueInput[] | null;
  disconnect?: Options_setWhereUniqueInput[] | null;
  delete?: Options_setWhereUniqueInput[] | null;
  update?: Options_setUpdateWithWhereUniqueWithoutPriceInput[] | null;
  updateMany?: Options_setUpdateManyWithWhereWithoutPriceInput[] | null;
  deleteMany?: Options_setScalarWhereInput[] | null;
}

export interface Options_setUpdateWithWhereUniqueWithoutOptionInput {
  where: Options_setWhereUniqueInput;
  data: Options_setUpdateWithoutOptionInput;
}

export interface Options_setUpdateWithWhereUniqueWithoutOrderInput {
  where: Options_setWhereUniqueInput;
  data: Options_setUpdateWithoutOrderInput;
}

export interface Options_setUpdateWithWhereUniqueWithoutPriceInput {
  where: Options_setWhereUniqueInput;
  data: Options_setUpdateWithoutPriceInput;
}

export interface Options_setUpdateWithoutOptionInput {
  status?: EnumStatusEnumFieldUpdateOperationsInput | null;
  paid_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  order?: OrdersUpdateOneRequiredWithoutOptions_setInput | null;
  price?: PricesUpdateOneRequiredWithoutOptions_setInput | null;
}

export interface Options_setUpdateWithoutOrderInput {
  status?: EnumStatusEnumFieldUpdateOperationsInput | null;
  paid_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  option?: OptionsUpdateOneRequiredWithoutOrdersInput | null;
  price?: PricesUpdateOneRequiredWithoutOptions_setInput | null;
}

export interface Options_setUpdateWithoutPriceInput {
  status?: EnumStatusEnumFieldUpdateOperationsInput | null;
  paid_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  option?: OptionsUpdateOneRequiredWithoutOrdersInput | null;
  order?: OrdersUpdateOneRequiredWithoutOptions_setInput | null;
}

export interface Options_setUpsertWithWhereUniqueWithoutOptionInput {
  where: Options_setWhereUniqueInput;
  update: Options_setUpdateWithoutOptionInput;
  create: Options_setCreateWithoutOptionInput;
}

export interface Options_setUpsertWithWhereUniqueWithoutOrderInput {
  where: Options_setWhereUniqueInput;
  update: Options_setUpdateWithoutOrderInput;
  create: Options_setCreateWithoutOrderInput;
}

export interface Options_setUpsertWithWhereUniqueWithoutPriceInput {
  where: Options_setWhereUniqueInput;
  update: Options_setUpdateWithoutPriceInput;
  create: Options_setCreateWithoutPriceInput;
}

export interface Options_setWhereInput {
  AND?: Options_setWhereInput[] | null;
  OR?: Options_setWhereInput[] | null;
  NOT?: Options_setWhereInput[] | null;
  id?: IntFilter | null;
  status?: EnumStatusEnumFilter | null;
  paid_at?: DateTimeNullableFilter | null;
  cancelled_at?: DateTimeNullableFilter | null;
  option_id?: IntFilter | null;
  order_id?: IntFilter | null;
  price_id?: IntFilter | null;
  option?: OptionsWhereInput | null;
  order?: OrdersWhereInput | null;
  price?: PricesWhereInput | null;
}

export interface Options_setWhereUniqueInput {
  id?: number | null;
}

export interface OrdersCreateManyChildInput {
  id?: number | null;
  cancelled_at?: any | null;
  created_at?: any | null;
  sport_voucher?: boolean | null;
}

export interface OrdersCreateManyChildInputEnvelope {
  data?: OrdersCreateManyChildInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface OrdersCreateNestedManyWithoutChildInput {
  create?: OrdersCreateWithoutChildInput[] | null;
  connectOrCreate?: OrdersCreateOrConnectWithoutChildInput[] | null;
  createMany?: OrdersCreateManyChildInputEnvelope | null;
  connect?: OrdersWhereUniqueInput[] | null;
}

export interface OrdersCreateNestedOneWithoutOptions_setInput {
  create?: OrdersCreateWithoutOptions_setInput | null;
  connectOrCreate?: OrdersCreateOrConnectWithoutOptions_setInput | null;
  connect?: OrdersWhereUniqueInput | null;
}

export interface OrdersCreateOrConnectWithoutChildInput {
  where: OrdersWhereUniqueInput;
  create: OrdersCreateWithoutChildInput;
}

export interface OrdersCreateOrConnectWithoutOptions_setInput {
  where: OrdersWhereUniqueInput;
  create: OrdersCreateWithoutOptions_setInput;
}

export interface OrdersCreateWithoutChildInput {
  cancelled_at?: any | null;
  created_at?: any | null;
  sport_voucher?: boolean | null;
  options_set?: Options_setCreateNestedManyWithoutOrderInput | null;
}

export interface OrdersCreateWithoutOptions_setInput {
  cancelled_at?: any | null;
  created_at?: any | null;
  sport_voucher?: boolean | null;
  child: ChildrenCreateNestedOneWithoutOrdersInput;
}

export interface OrdersListRelationFilter {
  every?: OrdersWhereInput | null;
  some?: OrdersWhereInput | null;
  none?: OrdersWhereInput | null;
}

export interface OrdersScalarWhereInput {
  AND?: OrdersScalarWhereInput[] | null;
  OR?: OrdersScalarWhereInput[] | null;
  NOT?: OrdersScalarWhereInput[] | null;
  id?: IntFilter | null;
  cancelled_at?: DateTimeNullableFilter | null;
  created_at?: DateTimeFilter | null;
  sport_voucher?: BoolFilter | null;
  child_id?: IntFilter | null;
}

export interface OrdersUpdateManyMutationInput {
  cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  sport_voucher?: BoolFieldUpdateOperationsInput | null;
}

export interface OrdersUpdateManyWithWhereWithoutChildInput {
  where: OrdersScalarWhereInput;
  data: OrdersUpdateManyMutationInput;
}

export interface OrdersUpdateManyWithoutChildInput {
  create?: OrdersCreateWithoutChildInput[] | null;
  connectOrCreate?: OrdersCreateOrConnectWithoutChildInput[] | null;
  upsert?: OrdersUpsertWithWhereUniqueWithoutChildInput[] | null;
  createMany?: OrdersCreateManyChildInputEnvelope | null;
  connect?: OrdersWhereUniqueInput[] | null;
  set?: OrdersWhereUniqueInput[] | null;
  disconnect?: OrdersWhereUniqueInput[] | null;
  delete?: OrdersWhereUniqueInput[] | null;
  update?: OrdersUpdateWithWhereUniqueWithoutChildInput[] | null;
  updateMany?: OrdersUpdateManyWithWhereWithoutChildInput[] | null;
  deleteMany?: OrdersScalarWhereInput[] | null;
}

export interface OrdersUpdateOneRequiredWithoutOptions_setInput {
  create?: OrdersCreateWithoutOptions_setInput | null;
  connectOrCreate?: OrdersCreateOrConnectWithoutOptions_setInput | null;
  upsert?: OrdersUpsertWithoutOptions_setInput | null;
  connect?: OrdersWhereUniqueInput | null;
  update?: OrdersUpdateWithoutOptions_setInput | null;
}

export interface OrdersUpdateWithWhereUniqueWithoutChildInput {
  where: OrdersWhereUniqueInput;
  data: OrdersUpdateWithoutChildInput;
}

export interface OrdersUpdateWithoutChildInput {
  cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  sport_voucher?: BoolFieldUpdateOperationsInput | null;
  options_set?: Options_setUpdateManyWithoutOrderInput | null;
}

export interface OrdersUpdateWithoutOptions_setInput {
  cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  sport_voucher?: BoolFieldUpdateOperationsInput | null;
  child?: ChildrenUpdateOneRequiredWithoutOrdersInput | null;
}

export interface OrdersUpsertWithWhereUniqueWithoutChildInput {
  where: OrdersWhereUniqueInput;
  update: OrdersUpdateWithoutChildInput;
  create: OrdersCreateWithoutChildInput;
}

export interface OrdersUpsertWithoutOptions_setInput {
  update: OrdersUpdateWithoutOptions_setInput;
  create: OrdersCreateWithoutOptions_setInput;
}

export interface OrdersWhereInput {
  AND?: OrdersWhereInput[] | null;
  OR?: OrdersWhereInput[] | null;
  NOT?: OrdersWhereInput[] | null;
  id?: IntFilter | null;
  cancelled_at?: DateTimeNullableFilter | null;
  created_at?: DateTimeFilter | null;
  sport_voucher?: BoolFilter | null;
  child_id?: IntFilter | null;
  child?: ChildrenWhereInput | null;
  options_set?: Options_setListRelationFilter | null;
}

export interface OrdersWhereUniqueInput {
  id?: number | null;
}

export interface PricesCreateManyOptionInput {
  id?: number | null;
  price: number;
  created_at?: any | null;
}

export interface PricesCreateManyOptionInputEnvelope {
  data?: PricesCreateManyOptionInput[] | null;
  skipDuplicates?: boolean | null;
}

export interface PricesCreateNestedManyWithoutOptionInput {
  create?: PricesCreateWithoutOptionInput[] | null;
  connectOrCreate?: PricesCreateOrConnectWithoutOptionInput[] | null;
  createMany?: PricesCreateManyOptionInputEnvelope | null;
  connect?: PricesWhereUniqueInput[] | null;
}

export interface PricesCreateNestedOneWithoutOptions_setInput {
  create?: PricesCreateWithoutOptions_setInput | null;
  connectOrCreate?: PricesCreateOrConnectWithoutOptions_setInput | null;
  connect?: PricesWhereUniqueInput | null;
}

export interface PricesCreateOrConnectWithoutOptionInput {
  where: PricesWhereUniqueInput;
  create: PricesCreateWithoutOptionInput;
}

export interface PricesCreateOrConnectWithoutOptions_setInput {
  where: PricesWhereUniqueInput;
  create: PricesCreateWithoutOptions_setInput;
}

export interface PricesCreateWithoutOptionInput {
  price: number;
  created_at?: any | null;
  options_set?: Options_setCreateNestedManyWithoutPriceInput | null;
}

export interface PricesCreateWithoutOptions_setInput {
  price: number;
  created_at?: any | null;
  option: OptionsCreateNestedOneWithoutPricesInput;
}

export interface PricesListRelationFilter {
  every?: PricesWhereInput | null;
  some?: PricesWhereInput | null;
  none?: PricesWhereInput | null;
}

export interface PricesScalarWhereInput {
  AND?: PricesScalarWhereInput[] | null;
  OR?: PricesScalarWhereInput[] | null;
  NOT?: PricesScalarWhereInput[] | null;
  id?: IntFilter | null;
  price?: IntFilter | null;
  created_at?: DateTimeFilter | null;
  option_id?: IntFilter | null;
}

export interface PricesUpdateManyMutationInput {
  price?: IntFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
}

export interface PricesUpdateManyWithWhereWithoutOptionInput {
  where: PricesScalarWhereInput;
  data: PricesUpdateManyMutationInput;
}

export interface PricesUpdateManyWithoutOptionInput {
  create?: PricesCreateWithoutOptionInput[] | null;
  connectOrCreate?: PricesCreateOrConnectWithoutOptionInput[] | null;
  upsert?: PricesUpsertWithWhereUniqueWithoutOptionInput[] | null;
  createMany?: PricesCreateManyOptionInputEnvelope | null;
  connect?: PricesWhereUniqueInput[] | null;
  set?: PricesWhereUniqueInput[] | null;
  disconnect?: PricesWhereUniqueInput[] | null;
  delete?: PricesWhereUniqueInput[] | null;
  update?: PricesUpdateWithWhereUniqueWithoutOptionInput[] | null;
  updateMany?: PricesUpdateManyWithWhereWithoutOptionInput[] | null;
  deleteMany?: PricesScalarWhereInput[] | null;
}

export interface PricesUpdateOneRequiredWithoutOptions_setInput {
  create?: PricesCreateWithoutOptions_setInput | null;
  connectOrCreate?: PricesCreateOrConnectWithoutOptions_setInput | null;
  upsert?: PricesUpsertWithoutOptions_setInput | null;
  connect?: PricesWhereUniqueInput | null;
  update?: PricesUpdateWithoutOptions_setInput | null;
}

export interface PricesUpdateWithWhereUniqueWithoutOptionInput {
  where: PricesWhereUniqueInput;
  data: PricesUpdateWithoutOptionInput;
}

export interface PricesUpdateWithoutOptionInput {
  price?: IntFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  options_set?: Options_setUpdateManyWithoutPriceInput | null;
}

export interface PricesUpdateWithoutOptions_setInput {
  price?: IntFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
  option?: OptionsUpdateOneRequiredWithoutPricesInput | null;
}

export interface PricesUpsertWithWhereUniqueWithoutOptionInput {
  where: PricesWhereUniqueInput;
  update: PricesUpdateWithoutOptionInput;
  create: PricesCreateWithoutOptionInput;
}

export interface PricesUpsertWithoutOptions_setInput {
  update: PricesUpdateWithoutOptions_setInput;
  create: PricesCreateWithoutOptions_setInput;
}

export interface PricesWhereInput {
  AND?: PricesWhereInput[] | null;
  OR?: PricesWhereInput[] | null;
  NOT?: PricesWhereInput[] | null;
  id?: IntFilter | null;
  price?: IntFilter | null;
  created_at?: DateTimeFilter | null;
  option_id?: IntFilter | null;
  option?: OptionsWhereInput | null;
  options_set?: Options_setListRelationFilter | null;
}

export interface PricesWhereUniqueInput {
  id?: number | null;
}

export interface StringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface StringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringFilter | null;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringNullableFilter | null;
}

export interface UpdateOptionSetInput {
  option_set_id: number;
  option_set_status: StatusEnum;
  childId: number;
}

export interface UserExistsInput {
  email: string;
}

export interface UsersCreateNestedOneWithoutChildrenInput {
  create?: UsersCreateWithoutChildrenInput | null;
  connectOrCreate?: UsersCreateOrConnectWithoutChildrenInput | null;
  connect?: UsersWhereUniqueInput | null;
}

export interface UsersCreateOrConnectWithoutChildrenInput {
  where: UsersWhereUniqueInput;
  create: UsersCreateWithoutChildrenInput;
}

export interface UsersCreateWithoutChildrenInput {
  id?: string | null;
  email: string;
  name: string;
  password: string;
  role?: RoleEnum | null;
  deleted_at?: any | null;
  first_name: string;
  phone_number: string;
  secondary_email?: string | null;
  resetPasswordToken?: string | null;
  verfifed_at?: any | null;
  created_at?: any | null;
}

export interface UsersUpdateOneRequiredWithoutChildrenInput {
  create?: UsersCreateWithoutChildrenInput | null;
  connectOrCreate?: UsersCreateOrConnectWithoutChildrenInput | null;
  upsert?: UsersUpsertWithoutChildrenInput | null;
  connect?: UsersWhereUniqueInput | null;
  update?: UsersUpdateWithoutChildrenInput | null;
}

export interface UsersUpdateWithoutChildrenInput {
  id?: StringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
  password?: StringFieldUpdateOperationsInput | null;
  role?: EnumRoleEnumFieldUpdateOperationsInput | null;
  deleted_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  first_name?: StringFieldUpdateOperationsInput | null;
  phone_number?: StringFieldUpdateOperationsInput | null;
  secondary_email?: NullableStringFieldUpdateOperationsInput | null;
  resetPasswordToken?: NullableStringFieldUpdateOperationsInput | null;
  verfifed_at?: NullableDateTimeFieldUpdateOperationsInput | null;
  created_at?: DateTimeFieldUpdateOperationsInput | null;
}

export interface UsersUpsertWithoutChildrenInput {
  update: UsersUpdateWithoutChildrenInput;
  create: UsersCreateWithoutChildrenInput;
}

export interface UsersWhereInput {
  AND?: UsersWhereInput[] | null;
  OR?: UsersWhereInput[] | null;
  NOT?: UsersWhereInput[] | null;
  id?: StringFilter | null;
  email?: StringFilter | null;
  name?: StringFilter | null;
  password?: StringFilter | null;
  role?: EnumRoleEnumFilter | null;
  deleted_at?: DateTimeNullableFilter | null;
  first_name?: StringFilter | null;
  phone_number?: StringFilter | null;
  secondary_email?: StringNullableFilter | null;
  resetPasswordToken?: StringNullableFilter | null;
  verfifed_at?: DateTimeNullableFilter | null;
  created_at?: DateTimeFilter | null;
  children?: ChildrenListRelationFilter | null;
}

export interface UsersWhereUniqueInput {
  id?: string | null;
  email?: string | null;
  resetPasswordToken?: string | null;
}

export interface courseId {
  id: number;
}

export interface loginInput {
  email: string;
  password: string;
}

export interface newUserData {
  name: string;
  first_name: string;
  password: string;
  phone_number: string;
  email: string;
  secondary_email?: string | null;
}

export interface resetPasswordInput {
  resetPasswordToken: string;
  newPassword: string;
}

export interface signupInput {
  name: string;
  first_name: string;
  password: string;
  phone_number: string;
  email: string;
  secondary_email?: string | null;
  children: (ChildrenCreateInput | null)[];
}

/**
 * Input needed to update a user data
 */
export interface updateUserInput {
  newUserData: newUserData;
  whereUserInput: userId;
}

export interface userId {
  id?: string | null;
}

export interface verifyTokenInput {
  token: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
