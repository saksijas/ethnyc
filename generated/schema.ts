// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Profile extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Profile entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Profile must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Profile", id.toString(), this);
    }
  }

  static load(id: string): Profile | null {
    return changetype<Profile | null>(store.get("Profile", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get profileId(): BigInt {
    let value = this.get("profileId");
    return value!.toBigInt();
  }

  set profileId(value: BigInt) {
    this.set("profileId", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get followNFT(): Bytes | null {
    let value = this.get("followNFT");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set followNFT(value: Bytes | null) {
    if (!value) {
      this.unset("followNFT");
    } else {
      this.set("followNFT", Value.fromBytes(<Bytes>value));
    }
  }

  get followNFTURI(): string | null {
    let value = this.get("followNFTURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set followNFTURI(value: string | null) {
    if (!value) {
      this.unset("followNFTURI");
    } else {
      this.set("followNFTURI", Value.fromString(<string>value));
    }
  }

  get handle(): string | null {
    let value = this.get("handle");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set handle(value: string | null) {
    if (!value) {
      this.unset("handle");
    } else {
      this.set("handle", Value.fromString(<string>value));
    }
  }

  get imageURI(): string | null {
    let value = this.get("imageURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageURI(value: string | null) {
    if (!value) {
      this.unset("imageURI");
    } else {
      this.set("imageURI", Value.fromString(<string>value));
    }
  }

  get createdAt(): BigInt | null {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt | null) {
    if (!value) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get followModule(): Bytes | null {
    let value = this.get("followModule");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set followModule(value: Bytes | null) {
    if (!value) {
      this.unset("followModule");
    } else {
      this.set("followModule", Value.fromBytes(<Bytes>value));
    }
  }

  get followModuleReturnData(): Bytes | null {
    let value = this.get("followModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set followModuleReturnData(value: Bytes | null) {
    if (!value) {
      this.unset("followModuleReturnData");
    } else {
      this.set("followModuleReturnData", Value.fromBytes(<Bytes>value));
    }
  }

  get dispatcher(): Bytes | null {
    let value = this.get("dispatcher");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set dispatcher(value: Bytes | null) {
    if (!value) {
      this.unset("dispatcher");
    } else {
      this.set("dispatcher", Value.fromBytes(<Bytes>value));
    }
  }

  get lastUpdated(): BigInt {
    let value = this.get("lastUpdated");
    return value!.toBigInt();
  }

  set lastUpdated(value: BigInt) {
    this.set("lastUpdated", Value.fromBigInt(value));
  }

  get totalMirrors(): BigInt {
    let value = this.get("totalMirrors");
    return value!.toBigInt();
  }

  set totalMirrors(value: BigInt) {
    this.set("totalMirrors", Value.fromBigInt(value));
  }

  get totalPosts(): BigInt {
    let value = this.get("totalPosts");
    return value!.toBigInt();
  }

  set totalPosts(value: BigInt) {
    this.set("totalPosts", Value.fromBigInt(value));
  }

  get totalComments(): BigInt {
    let value = this.get("totalComments");
    return value!.toBigInt();
  }

  set totalComments(value: BigInt) {
    this.set("totalComments", Value.fromBigInt(value));
  }

  get totalFollowers(): BigInt {
    let value = this.get("totalFollowers");
    return value!.toBigInt();
  }

  set totalFollowers(value: BigInt) {
    this.set("totalFollowers", Value.fromBigInt(value));
  }

  get totalFollowings(): BigInt {
    let value = this.get("totalFollowings");
    return value!.toBigInt();
  }

  set totalFollowings(value: BigInt) {
    this.set("totalFollowings", Value.fromBigInt(value));
  }

  get followers(): Array<string> {
    let value = this.get("followers");
    return value!.toStringArray();
  }

  set followers(value: Array<string>) {
    this.set("followers", Value.fromStringArray(value));
  }

  get followings(): Array<string> {
    let value = this.get("followings");
    return value!.toStringArray();
  }

  set followings(value: Array<string>) {
    this.set("followings", Value.fromStringArray(value));
  }

  get comments(): Array<string> | null {
    let value = this.get("comments");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set comments(value: Array<string> | null) {
    if (!value) {
      this.unset("comments");
    } else {
      this.set("comments", Value.fromStringArray(<Array<string>>value));
    }
  }

  get posts(): Array<string> | null {
    let value = this.get("posts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set posts(value: Array<string> | null) {
    if (!value) {
      this.unset("posts");
    } else {
      this.set("posts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get mirrors(): Array<string> | null {
    let value = this.get("mirrors");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set mirrors(value: Array<string> | null) {
    if (!value) {
      this.unset("mirrors");
    } else {
      this.set("mirrors", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Account must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get defaultProfile(): string | null {
    let value = this.get("defaultProfile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set defaultProfile(value: string | null) {
    if (!value) {
      this.unset("defaultProfile");
    } else {
      this.set("defaultProfile", Value.fromString(<string>value));
    }
  }

  get profilesIds(): Array<string> {
    let value = this.get("profilesIds");
    return value!.toStringArray();
  }

  set profilesIds(value: Array<string>) {
    this.set("profilesIds", Value.fromStringArray(value));
  }

  get profiles(): Array<string> | null {
    let value = this.get("profiles");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set profiles(value: Array<string> | null) {
    if (!value) {
      this.unset("profiles");
    } else {
      this.set("profiles", Value.fromStringArray(<Array<string>>value));
    }
  }

  get following(): Array<string> {
    let value = this.get("following");
    return value!.toStringArray();
  }

  set following(value: Array<string>) {
    this.set("following", Value.fromStringArray(value));
  }

  get totalFollowings(): BigInt {
    let value = this.get("totalFollowings");
    return value!.toBigInt();
  }

  set totalFollowings(value: BigInt) {
    this.set("totalFollowings", Value.fromBigInt(value));
  }
}

export class Creator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Creator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Creator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Creator", id.toString(), this);
    }
  }

  static load(id: string): Creator | null {
    return changetype<Creator | null>(store.get("Creator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get isWhitelisted(): boolean {
    let value = this.get("isWhitelisted");
    return value!.toBoolean();
  }

  set isWhitelisted(value: boolean) {
    this.set("isWhitelisted", Value.fromBoolean(value));
  }

  get lastUpdated(): BigInt {
    let value = this.get("lastUpdated");
    return value!.toBigInt();
  }

  set lastUpdated(value: BigInt) {
    this.set("lastUpdated", Value.fromBigInt(value));
  }
}

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Post must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromProfile(): string | null {
    let value = this.get("fromProfile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromProfile(value: string | null) {
    if (!value) {
      this.unset("fromProfile");
    } else {
      this.set("fromProfile", Value.fromString(<string>value));
    }
  }

  get pubId(): BigInt {
    let value = this.get("pubId");
    return value!.toBigInt();
  }

  set pubId(value: BigInt) {
    this.set("pubId", Value.fromBigInt(value));
  }

  get referenceModule(): Bytes {
    let value = this.get("referenceModule");
    return value!.toBytes();
  }

  set referenceModule(value: Bytes) {
    this.set("referenceModule", Value.fromBytes(value));
  }

  get referenceModuleReturnData(): Bytes | null {
    let value = this.get("referenceModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set referenceModuleReturnData(value: Bytes | null) {
    if (!value) {
      this.unset("referenceModuleReturnData");
    } else {
      this.set("referenceModuleReturnData", Value.fromBytes(<Bytes>value));
    }
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get content(): string | null {
    let value = this.get("content");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set content(value: string | null) {
    if (!value) {
      this.unset("content");
    } else {
      this.set("content", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get uriResult(): Bytes | null {
    let value = this.get("uriResult");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriResult(value: Bytes | null) {
    if (!value) {
      this.unset("uriResult");
    } else {
      this.set("uriResult", Value.fromBytes(<Bytes>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }

  get collectModule(): Bytes {
    let value = this.get("collectModule");
    return value!.toBytes();
  }

  set collectModule(value: Bytes) {
    this.set("collectModule", Value.fromBytes(value));
  }

  get collectModuleReturnData(): Bytes | null {
    let value = this.get("collectModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set collectModuleReturnData(value: Bytes | null) {
    if (!value) {
      this.unset("collectModuleReturnData");
    } else {
      this.set("collectModuleReturnData", Value.fromBytes(<Bytes>value));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Mirror extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mirror entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mirror must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Mirror", id.toString(), this);
    }
  }

  static load(id: string): Mirror | null {
    return changetype<Mirror | null>(store.get("Mirror", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromProfile(): string | null {
    let value = this.get("fromProfile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromProfile(value: string | null) {
    if (!value) {
      this.unset("fromProfile");
    } else {
      this.set("fromProfile", Value.fromString(<string>value));
    }
  }

  get pubId(): BigInt {
    let value = this.get("pubId");
    return value!.toBigInt();
  }

  set pubId(value: BigInt) {
    this.set("pubId", Value.fromBigInt(value));
  }

  get referenceModule(): Bytes {
    let value = this.get("referenceModule");
    return value!.toBytes();
  }

  set referenceModule(value: Bytes) {
    this.set("referenceModule", Value.fromBytes(value));
  }

  get referenceModuleReturnData(): Bytes | null {
    let value = this.get("referenceModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set referenceModuleReturnData(value: Bytes | null) {
    if (!value) {
      this.unset("referenceModuleReturnData");
    } else {
      this.set("referenceModuleReturnData", Value.fromBytes(<Bytes>value));
    }
  }

  get profileIdPointed(): BigInt {
    let value = this.get("profileIdPointed");
    return value!.toBigInt();
  }

  set profileIdPointed(value: BigInt) {
    this.set("profileIdPointed", Value.fromBigInt(value));
  }

  get pubIdPointed(): BigInt {
    let value = this.get("pubIdPointed");
    return value!.toBigInt();
  }

  set pubIdPointed(value: BigInt) {
    this.set("pubIdPointed", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Comment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Comment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Comment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Comment", id.toString(), this);
    }
  }

  static load(id: string): Comment | null {
    return changetype<Comment | null>(store.get("Comment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromProfile(): string | null {
    let value = this.get("fromProfile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromProfile(value: string | null) {
    if (!value) {
      this.unset("fromProfile");
    } else {
      this.set("fromProfile", Value.fromString(<string>value));
    }
  }

  get pubId(): BigInt {
    let value = this.get("pubId");
    return value!.toBigInt();
  }

  set pubId(value: BigInt) {
    this.set("pubId", Value.fromBigInt(value));
  }

  get referenceModule(): Bytes {
    let value = this.get("referenceModule");
    return value!.toBytes();
  }

  set referenceModule(value: Bytes) {
    this.set("referenceModule", Value.fromBytes(value));
  }

  get referenceModuleReturnData(): Bytes | null {
    let value = this.get("referenceModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set referenceModuleReturnData(value: Bytes | null) {
    if (!value) {
      this.unset("referenceModuleReturnData");
    } else {
      this.set("referenceModuleReturnData", Value.fromBytes(<Bytes>value));
    }
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get profileIdPointed(): BigInt {
    let value = this.get("profileIdPointed");
    return value!.toBigInt();
  }

  set profileIdPointed(value: BigInt) {
    this.set("profileIdPointed", Value.fromBigInt(value));
  }

  get pubIdPointed(): BigInt {
    let value = this.get("pubIdPointed");
    return value!.toBigInt();
  }

  set pubIdPointed(value: BigInt) {
    this.set("pubIdPointed", Value.fromBigInt(value));
  }

  get collectModule(): Bytes | null {
    let value = this.get("collectModule");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set collectModule(value: Bytes | null) {
    if (!value) {
      this.unset("collectModule");
    } else {
      this.set("collectModule", Value.fromBytes(<Bytes>value));
    }
  }

  get collectModuleReturnData(): Bytes | null {
    let value = this.get("collectModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set collectModuleReturnData(value: Bytes | null) {
    if (!value) {
      this.unset("collectModuleReturnData");
    } else {
      this.set("collectModuleReturnData", Value.fromBytes(<Bytes>value));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Follow extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Follow entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Follow must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Follow", id.toString(), this);
    }
  }

  static load(id: string): Follow | null {
    return changetype<Follow | null>(store.get("Follow", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromAccount(): string | null {
    let value = this.get("fromAccount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromAccount(value: string | null) {
    if (!value) {
      this.unset("fromAccount");
    } else {
      this.set("fromAccount", Value.fromString(<string>value));
    }
  }

  get fromProfileSTR(): string | null {
    let value = this.get("fromProfileSTR");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromProfileSTR(value: string | null) {
    if (!value) {
      this.unset("fromProfileSTR");
    } else {
      this.set("fromProfileSTR", Value.fromString(<string>value));
    }
  }

  get toProfile(): Array<string> | null {
    let value = this.get("toProfile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set toProfile(value: Array<string> | null) {
    if (!value) {
      this.unset("toProfile");
    } else {
      this.set("toProfile", Value.fromStringArray(<Array<string>>value));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class FollowNFTTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FollowNFTTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FollowNFTTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FollowNFTTransferred", id.toString(), this);
    }
  }

  static load(id: string): FollowNFTTransferred | null {
    return changetype<FollowNFTTransferred | null>(
      store.get("FollowNFTTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get profileId(): BigInt | null {
    let value = this.get("profileId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set profileId(value: BigInt | null) {
    if (!value) {
      this.unset("profileId");
    } else {
      this.set("profileId", Value.fromBigInt(<BigInt>value));
    }
  }

  get followNFTID(): BigInt | null {
    let value = this.get("followNFTID");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set followNFTID(value: BigInt | null) {
    if (!value) {
      this.unset("followNFTID");
    } else {
      this.set("followNFTID", Value.fromBigInt(<BigInt>value));
    }
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(<Bytes>value));
    }
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(<Bytes>value));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get data(): string | null {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set data(value: string | null) {
    if (!value) {
      this.unset("data");
    } else {
      this.set("data", Value.fromString(<string>value));
    }
  }
}

export class EpnsNotificationCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save EpnsNotificationCounter entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EpnsNotificationCounter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EpnsNotificationCounter", id.toString(), this);
    }
  }

  static load(id: string): EpnsNotificationCounter | null {
    return changetype<EpnsNotificationCounter | null>(
      store.get("EpnsNotificationCounter", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalCount(): BigInt {
    let value = this.get("totalCount");
    return value!.toBigInt();
  }

  set totalCount(value: BigInt) {
    this.set("totalCount", Value.fromBigInt(value));
  }
}

export class EpnsPushNotification extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EpnsPushNotification entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EpnsPushNotification must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EpnsPushNotification", id.toString(), this);
    }
  }

  static load(id: string): EpnsPushNotification | null {
    return changetype<EpnsPushNotification | null>(
      store.get("EpnsPushNotification", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get notificationNumber(): BigInt {
    let value = this.get("notificationNumber");
    return value!.toBigInt();
  }

  set notificationNumber(value: BigInt) {
    this.set("notificationNumber", Value.fromBigInt(value));
  }

  get recipient(): string {
    let value = this.get("recipient");
    return value!.toString();
  }

  set recipient(value: string) {
    this.set("recipient", Value.fromString(value));
  }

  get notification(): string {
    let value = this.get("notification");
    return value!.toString();
  }

  set notification(value: string) {
    this.set("notification", Value.fromString(value));
  }
}
